import React from "react";
import find_job_img from "../../../assets/images/find-job.jpg";
import Preloader from "../../common/Preloader";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    if (props.profile == null) {
        return <Preloader />;
    }

    return (
        <div>
            <div>
                <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"></img>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt="ava" />
                <div className={classes.info}>
                    <div className={classes.fullName}>{props.profile.fullName}</div>
                    <div className={classes.aboutMe}>{props.profile.aboutMe}</div>
                    <div className={classes.job}>
                        <div className={classes.lookingForAJob}>
                            <img
                                src={
                                    props.profile.lookingForAJob
                                        ? find_job_img
                                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0ggLmlDWEptnoWwD3qCXkJVRtF5fRdH1gAQ&usqp=CAU"
                                }
                                alt="job_img"
                            />
                        </div>
                        <div className={classes.lookingForAJobDescription}>{props.profile.lookingForAJobDescription}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
