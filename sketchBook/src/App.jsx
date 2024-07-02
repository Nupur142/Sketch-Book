import ReactPainter from 'react-painter'
import './App.css'

function App() {
  
  return (
    <>
    <ReactPainter
       width={1000}
       height={600}
       render={({canvas,triggerSave,setColor,setLineWidth,setLineJoin,setLineCap,imageDownloadUrl})=>(
          <div>
            <h1> Sketch Book </h1>
            <div className="toolbox">
              <div className="flex">
                <label htmlFor="">Brush Color</label>
                <input type="color" onChange={(e)=>setColor(e.target.value)} />
              </div>

              <div className="flex">
                <label htmlFor="">Brush Size</label>
                <input type="range" defaultValue={"1"} min={"1"} max={"50"} onChange={(e)=>setLineWidth(e.target.value)} />
              </div>

              <div className="flex">
                <label htmlFor="">Line Join</label>
                <select name="" id="" onChange={(e)=>setLineJoin(e.target.value)}>
                  <option value="round">Round</option>
                  <option value="bevel">Bevel</option>
                  <option value="miter">Miter</option>
                </select>
              </div>

              <div className="flex">
                <label htmlFor="">Line Cap</label>
                <select name="" id="" onChange={(e)=>setLineCap(e.target.value)}>
                  <option value="round">Round</option>
                  <option value="butt">Butt</option>
                  <option value="square">Square</option>
                </select>
              </div>
             { imageDownloadUrl ? <button><a href={imageDownloadUrl}>Download</a></button> : 
                                  <button onClick={triggerSave}>Save</button>
             
            }

            </div>
          <div className="awesomeContainer">{canvas}</div>
          </div>
       )}
    />
      
    </>
  )
}

export default App
