import img from "../image/propic.jpeg"

const Info=()=>(
    <info>
    <img src={img} alt="" className="pro-pic" />
    <h3 className="name">Nahid Hasan</h3>
    <h6 className="status">Front-end Developer</h6>
    <p className="handle">@shimantoDevJs</p>
    <div className="btns">
           <button className="btn btn-1"><i class="fa-regular fa-envelope"></i> Email</button>
           <button className="btn btn-2"><i class="fa-brands fa-linkedin"></i> LinkedIn</button>
    </div>
    </info>
)


export default Info