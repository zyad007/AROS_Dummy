import { useEffect, useState } from "react"

function App(): JSX.Element {

  const [message, setMessage] = useState('');

  useEffect(() => {
    window.electron.ipcRenderer.on('v2v_receive', (_, res) => {
      setMessage(res)
    })
  }, [])

  return (
    <>
      <div className="h-screen w-screen ">
        {
          !message ?
            <div className="w-full h-full bg-white text-black flex justify-center items-center text-5xl">
              Driving
            </div>
            :
            <div className="w-full h-full bg-red-700 text-white flex justify-center items-center text-5xl">
              Warning
            </div>
        }
      </div>
    </>
  )
}

export default App
