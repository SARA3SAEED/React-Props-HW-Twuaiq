import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Main from './components/Main'
import Card from './components/Card'
import Side from './components/Side'
import Footer from './components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <Main></Main>


      <div className="div-card">
      <Card
      title="معسكر"
      topic="تصميم وتصنيع الحلول الهندسية"
      location="الرياض"
      duration="14 أسابيع"
      date="30-06-2024"
      ></Card>


      <Card
      title="برنامج"
      topic="تصميم وتصنيع الحلول الهندسية"
      location="الرياض"
      duration="14 أسابيع"
      date="30-06-2024"
      ></Card>


      <Card
      title="لقاء"
      topic="تصميم وتصنيع الحلول الهندسية"
      location="الرياض"
      duration="14 أسابيع"
      date="30-06-2024"
      ></Card>
   

      <Card
      title="لقاء"
      topic="تصميم وتصنيع الحلول الهندسية"
      location="الرياض"
      duration="14 أسابيع"
      date="30-05-2024"
      ></Card>

      <Card
      title="معسكر"
      topic="تصميم وتصنيع الحلول الهندسية"
      location="الرياض"
      duration="14 أسابيع"
      date="30-06-2024"
      ></Card>

      <Card
      title="لقاء"
      topic="تصميم وتصنيع الحلول الهندسية"
      location="الرياض"
      duration="14 أسابيع"
      date="30-05-2024"
      ></Card>


      </div>


      <Side></Side>
      <Footer></Footer>
    </>
  )
}

export default App
