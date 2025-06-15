import './button.css';

export default function Button({obj}){

    let title=obj.title;
    let icon=obj.icon;
    let img1=obj.img;
   
    let img2 = <img src={img1} alt="" />;

    
    return(
    
        <button>{title}
        {icon}
        {img2}
         </button>
    );
}