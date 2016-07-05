import React, { Component } from 'react';
import { Grid, Col, Row, PageHeader, Panel } from 'react-bootstrap'
import CodeMirror from 'react-codemirror'

require('codemirror/mode/javascript/javascript');

export default class Lesson extends Component {

  constructor(props) {
    super(props)
    const results = []

    props.tests.forEach( (test, i) => {
      results.push({
        passing: false,
        error: null
      })
    });

    this.state = {
      error: null,
      code: props.defaultCode,
      results
    }
  }

  componentDidMount() {
    this.worker = new Worker('/public/js/worker.js')
    this.worker.onmessage = (e) => {
      if(e.data.code === this.state.code) {
        this.setState({error: null})

        if( e.data.error ) {
          return this.setState({ error: e.data.error });
        }

        this.setState({ error: null });
        var newTestState = this.state.results

        newTestState[e.data.index] = {
          passing: e.data.result.passing,
          error: e.data.result.error
        }

        this.setState({
          results: newTestState
        })
      }
    }

    this.worker.onerror = (e) => {
      console.log(e)
      this.setState({
        error: e.message
      })
    }

    this.runTests(this.state.code);
  }

  runTests(code) {
    this.setState({code})
    this.setState({error: null})
    const newTests = this.props.tests.map( (test, index) => {
      this.worker.postMessage({
        index,
        test,
        code
      })
    })
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <PageHeader>Lesson {this.props.id}</PageHeader>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <h4>Code</h4>
            <CodeMirror value={this.state.code} onChange={this.runTests.bind(this)}/>
          </Col>
          <Col xs={12} sm={6}>
            {this.state.error && <Panel bsStyle="danger" header="Error">{this.state.error}</Panel>}

            <h4>Tests</h4>
            <ul>
              {this.props.tests.map( (test, i) => (
                <li key={i}>
                  <span style={{ color: this.state.results[i].passing ? 'green' : 'red' }}>{test.name} {this.state.results[i].passing ? '✓' : '❌'}</span>
                  <br/>
                  {this.state.results[i].error && <small>{this.state.results[i].error}</small>}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Grid>
    )
  }
}
