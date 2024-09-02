import style from './headingDiv.module.css';
import Image from 'next/image';
export default function HeadingDiv({img, page, name, designation}){
    return (
        <div className={style.headingDiv}>
                    <h2>{page}</h2>
                    {/* <input className={style.input} placeholder='Search'></input> */}
                    <div className={style.profilePicInfoDiv}>
                        <Image src={img} className={style.profilePic} width={50} height={50}></Image>
                        <div className={style.nameAndRole}>
                            <p className={style.name}>{name}</p>
                            <p className={style.designation}>{designation}</p>
                        </div>
                    </div>
                </div>
    );
}