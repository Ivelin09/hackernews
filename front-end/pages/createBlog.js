import style from '../components/createBlog.module.css'
import Image from 'next/image'
import bg from '../public/bg.jpg'

export default function Page() {
  
    return (
        <div>
            <Image src={bg} width={window.innerWidth} className="background"></Image>
            <div className="border">
            </div>
              <form>
                <label>Title</label>
                <div>
                  <input type="text" id="username" name="username" variant="outlined" required />
                </div>
                <label>Description</label>
                <div>
                <input type="text" id="username" name="username" variant="outlined" required />
                </div>
                <div>
                  <div>
                      <button type="submit">Send</button>
                  </div>
                </div>
            </form>
        </div>
    )
}