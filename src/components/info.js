import img from "../image/propic.jpeg"

const Info=()=>(
    <info>
    <img src={img} alt="" className="pro-pic" />
    <h1 className="name">Nahid Hasan</h1>
    <h3 className="status">Front-end Developer</h3>
    <p className="handle">@shimantoDevJs</p>
    <div className="btns">
           <button className="btn btn-1"><i class="fa-regular fa-envelope"></i> Email</button>
           <button className="btn btn-2"><i class="fa-brands fa-linkedin"></i> LinkedIn</button>
    </div>
    </info>
)


export default Info