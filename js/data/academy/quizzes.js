// Pathway-level quizzes (classic script global, ASCII only)
// Module quizzes live inside each course file. This file holds cross-course assessments.
const AA_PATH_QUIZZES = {
  pathway: {
    id: 'pathway-final',
    title: 'Notion & n8n Automation Academy - Pathway Check',
    passPercent: 75,
    questions: [
      { q: 'In the three-layer architecture used in this pathway, what does Notion primarily do?', options: ['Interprets language', 'Stores and presents data for humans', 'Runs scheduled jobs', 'Hosts Docker'], correct: 1, explain: 'Notion is the storage and interface layer; n8n orchestrates and AI interprets.' },
      { q: 'Which statement about the course tooling is correct?', options: ['n8n Cloud is required', 'Self-hosted n8n Community Edition with Docker Desktop is used', 'Notion Enterprise is required', 'A paid AI API is required'], correct: 1, explain: 'All labs are designed for free self-hosted tools; paid options are optional.' },
      { q: 'Why should a Notion integration be connected only to specific databases?', options: ['Notion forbids more', 'Least privilege limits damage if a token leaks', 'It speeds up Docker', 'It is required for formulas'], correct: 1, explain: 'Minimum scope reduces exposure if credentials are compromised.' },
      { q: 'What is the safest handling of AI output that will trigger an action?', options: ['Trust it', 'Validate it and use a human fallback when invalid', 'Hide it', 'Run it twice'], correct: 1, explain: 'Validation and human review prevent wrong actions from reaching real systems.' },
      { q: 'What prevents duplicate Notion records when a webhook retries?', options: ['A stable Source ID and an upsert pattern', 'More nodes', 'A larger server', 'A bigger prompt'], correct: 0, explain: 'Searching by a stable ID before creating makes the workflow idempotent.' },
      { q: 'Which is a good use of an AI agent instead of a fixed workflow?', options: ['A known five-step process', 'Answering open-ended questions by choosing between several read-only tools', 'Calculating tax exactly', 'Deleting records'], correct: 1, explain: 'Agents suit open-ended routing between tools; known paths should be fixed workflows.' },
      { q: 'Why does a webhook on localhost need a tunnel for outside services?', options: ['Docker blocks it', 'localhost is not reachable from the internet', 'JSON is not supported', 'It needs a paid plan'], correct: 1, explain: 'A private address cannot be called from outside without a tunnel or public host.' },
      { q: 'Which data class should never be sent to an external AI service?', options: ['Public', 'Internal', 'Restricted', 'Marketing copy'], correct: 2, explain: 'Restricted data such as credentials or sensitive personal data must stay in controlled environments.' },
      { q: 'What is the purpose of a kill switch?', options: ['Delete data', 'Quickly stop automation behavior during an incident', 'Speed up workflows', 'Hide logs'], correct: 1, explain: 'A kill switch contains harm quickly so the team can investigate.' },
      { q: 'Which RAG practice most improves trust in answers?', options: ['Longer answers', 'Citations to source documents and refusal when no source is found', 'Bigger fonts', 'More emojis'], correct: 1, explain: 'Citations and refusal behavior let users verify and prevent invented answers.' }
    ]
  }
};
