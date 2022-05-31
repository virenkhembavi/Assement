import './App.css';
import Home from './component/Home/index'
import Edit from './component/Edit/index'
import { data } from './api/index'
import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  const [sData, setSdata] = useState([])

  const storeData = async () => {
    const response = await data()
    setSdata(response.data)
    // if (response.status !== 200) window.location.reload()
  }
  useEffect(() => {
    storeData()
  }, [sData])

  return (
    <BrowserRouter>

      <div className="App">
        <div className="HeadWapper">
          <Routes>
            <Route path='/' element={<Home data={sData} />} />
            <Route path='/edit/:id' element={<Edit />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
