import Button from "../../components/Button/Button"
import { database } from "../../FirebaseAuth/firebase.config";
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom";

function Meun() {

  const navigate = useNavigate();

  const handleClick = () => {
    signOut(database)
    .then(val => {
      console.log(val, "val");
      navigate('/')
    })
  }

  return (
    <div>
      <h1 className="text-center font-[800]">meun</h1>

      <Button
        label="Sign Out"
        type="submit"
        styles="bg-[#28282c] text-[#048970] text-[15px] font-[500] rounded-[5px] py-[10px] shadow-2xl w-[100%] md:w-[30%] hover:md:w-[50%] transition-all ease-in-out duration-[0.5s]"
        onClick={handleClick}
      />
    </div>
  )
}

export default Meun