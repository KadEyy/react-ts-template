import * as React from 'react';
import pageStyle from '../Page.module.css';
import style from './Home.module.css';

const HomePage: React.FC = () =>{
    return(
        <div className={pageStyle.container}>
            {/*You can put navbar here*/}
            <div className={pageStyle.content}>
                <div className={style.intro}>
                    <p>
                        Homepage component - you can put navbar above content div, and footer below.<br></br>
                        Content is flex: 1 so it will take rest of empty space.<br></br><br></br>
                        Set up your routes in routes.ts, and thats all. You can simply work with this template.
                    </p>
                </div>              
            </div>
            {/*You can put footer here*/}
        </div>
    )
}

export default HomePage;