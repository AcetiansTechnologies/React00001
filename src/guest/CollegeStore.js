import React from 'react'
import PageHeader from '../components/PageHeader'

import PageContent from '../components/PageContent'
import Blog from '../components/Blog'

function CollegeStore() {
  return (
    <div>
      <PageHeader title="College Store" />
      <PageContent elem={<Blog image='' content='<p>उच्च शिक्षा के प्रसार के संकल्प को साकार करने के उद्देश्य से उत्तर प्रदेश सरकार द्वारा प्रदेश के सुदूर एवं पिछड़े क्षेत्रों में राजकीय महाविद्यालयों की स्थापना के क्रम में पनियरा क्षेत्र के स्थानीय विधायक एवं उ.प्र. शासन के तत्कालीन राज्यमंत्री (स्वतंत्र प्रभार), माननीय फतेह बहादुर सिंह के अथक प्रयास से शासनादेश संख्या: शि.मं./29/सत्तर-5-99-40(59)/95 दिनांक 28 अप्रैल, 1999 द्वारा राजकीय महाविद्यालय कम्पियरगंज, गोरखपुर की स्थापना हुई। स्वतंत्रता प्राप्ति के पचास वर्ष बाद भी इस ग्रामीणांचल के छात्र-छात्राओं को उच्च शिक्षा प्राप्त करने के लिए दूर-दराज के महाविद्यालयों में जाना पड़ता था, जिससे अभिभावकों और छात्र-छा़त्राओं को बहुत कठिनाई होती थी। फलतः इस क्षेत्र के विकास हेतु सतत जागरूक माननीय फतेह बहादुर सिंह के अथक परिश्रम से यह राजकीय महाविद्यालय अस्तित्व में आया।</p>' />}/>
    </div>
  )
}

export default CollegeStore
