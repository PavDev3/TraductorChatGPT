import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap'
import './App.css'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'

function App () {
  const { setToLanguage, interchangeLanguages, setFromLanguage, fromLanguage, toLanguage } = useStore()
  return (
    <Container fluid>
      <Row>
        <h1>Translator with ChatGPT</h1>
        <Col>
        <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <Form.Control
              as='textarea'
              rows={5}
              placeholder='Introducir texto...'
              autoFocus
              style={{ height: '150px' }}
            />
          </Stack>
        </Col>

        <Col xs='auto'>
        <Button variant='link'disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
          <ArrowsIcon />
          </Button>
        </Col>
        <Col>
        <Stack gap={2}>
          <LanguageSelector
            type={SectionType.To}
            value={toLanguage}
            onChange={setToLanguage} />
            <Form.Control
              as='textarea'
              rows={5}
              placeholder='Traducción'
              style={{ height: '150px' }}
            />
          </Stack>
        </Col>
      </Row>
    </Container>

  )
}

export default App
