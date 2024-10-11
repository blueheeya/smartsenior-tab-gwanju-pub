import { reactive } from 'vue'

export const popupStore = reactive({
  isOpen: false,
  title: '',
  contents: [],
  currentPage: '',
  synthesisLink: '',
  openPopup(page) {
    this.isOpen = true
    this.currentPage = page
    this.updateContent()
  },
  closePopup() {
    this.isOpen = false
  },
  updateContent() {
    switch (this.currentPage) {
      case 'blood':
        this.title = '혈압 측정'
        this.contents = [
          { cntName: '혈압(최저/최고)', cntData: '75/110 ', cntDataType: 'mmHg' },
          { cntName: '맥박수', cntData: '80 ', cntDataType: 'BPM' },
          { cntName: '맥압', cntData: '35 ', cntDataType: 'mmHg' },
          { cntName: '심부담도', cntData: '8225', cntDataType: '' }
        ]
        this.synthesisLink = '/synthesis'
        break
      case 'height':
        this.title = '신장 측정'
        this.contents = [
          { cntName: '키', cntData: '170', cntDataType: 'cm' },
          { cntName: '몸무게', cntData: '70', cntDataType: 'kg' }
        ]
        this.synthesisLink = '/synthesis'
        break
      case 'body':
        this.title = '체성분 측정'
        this.contents = [
          { cntName: '체중', cntData: '70', cntDataType: 'kg' },
          { cntName: '체지방률', cntData: '20', cntDataType: '%' },
          { cntName: '골격근량', cntData: '30', cntDataType: '%' },
          { cntName: 'BMI', cntData: '24.2', cntDataType: 'kg/㎡' }
        ]
        this.synthesisLink = '/synthesis'
        break
      case 'parallel':
        this.title = '평행 측정'
        this.contents = [
          { cntName: '왼쪽 다리', cntData: '10', cntDataType: '초' },
          { cntName: '오른쪽 다리', cntData: '10', cntDataType: '초' },
          { cntName: '평균', cntData: '10', cntDataType: '초' },
          { cntName: '점수', cntData: '20', cntDataType: '점' }
        ]
        this.synthesisLink = '/synthesis'
        break
      default:
        this.title = '측정 결과'
        this.contents = ['측정 결과가 없습니다.']
        this.synthesisLink = '/'
    }
  }
})
