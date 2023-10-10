import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { useEffect } from 'react'
import './App.css'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'
import { translate } from './services/translate'

function App () {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setToResult,
    loading

  } = useStore()

  useEffect(() => {
    if (fromText === '') return

    translate({ fromLanguage, toLanguage, text: fromText })
      .then(result => {
        if (result === null) return
        setToResult(result)
      })
      .catch(() => { setToResult('Error') })
  }, [fromText])

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
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}

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
            <TextArea
             loading={loading}
              type={SectionType.To}
              value={result}
              onChange={setToResult}
            />
          </Stack>
        </Col>
      </Row>
    </Container>

  )
}

export default App
