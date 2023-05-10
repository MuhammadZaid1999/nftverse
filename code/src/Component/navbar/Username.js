
import { useStore } from "../../context/GlobalState";

export default function Username(){
    const [{user_data}] = useStore();
    return (
        <div>
            <h4 className="text-right" style={{marginRight:"1%", marginTop: "-3%"}}>Hello, {user_data.username}!!!</h4>
            <hr/>
        </div>        
    )
}