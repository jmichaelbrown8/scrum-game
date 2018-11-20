const initialData = {
  pieces: {
    'sprintPlanning': {id: 'sprintPlanning', content: 'Sprint Planning'},
    'dailyScrum': {id: 'dailyScrum', content: 'Daily Scrum'},
    'sprintReview': {id: 'sprintReview', content: 'Sprint Review'},
    'sprintRetrospective': {id: 'sprintRetrospective', content: 'Sprint Retrospective'},
    'backlogRefinement': {id: 'backlogRefinement', content: 'Backlog Refinement'},
    'codeReview': {id: 'codeReview', content: 'Code Review'},
    'designSession': {id: 'designSession', content: 'Design Session'},
    'innovation': {id: 'innovation', content: 'Innovation'},
    'testing': {id: 'testing', content: 'Testing'},
  },
  spaces: {
    'resevoir': {
      id: 'resevoir',
      pieceIds: [

        'dailyScrum',
        'sprintReview',
        'sprintRetrospective',
        'backlogRefinement',
        'codeReview',
        'designSession',
        'innovation',
        'testing'
      ]
    },
    'space-1': {
      id: 'space-1',
      pieceIds: [
        'sprintPlanning',
      ]
    },
    'space-2': {
      id: 'space-2',
      pieceIds: []
    },
    'space-3': {
      id: 'space-3',
      pieceIds: []
    },
    'space-4': {
      id: 'space-4',
      pieceIds: []
    },
    'space-5': {
      id: 'space-5',
      pieceIds: []
    },
    'space-6': {
      id: 'space-6',
      pieceIds: []
    },
    'space-7': {
      id: 'space-7',
      pieceIds: []
    },
    'space-8': {
      id: 'space-8',
      pieceIds: []
    },
    'space-9': {
      id: 'space-9',
      pieceIds: []
    }
  }
}

export default initialData;
