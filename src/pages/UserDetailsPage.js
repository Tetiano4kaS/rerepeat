import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../services/userService";
import {UserDetails} from "../components/UserContainer/UserDetails";

const UserDetailsPage = () => {
    const {userId} = useParams()
    const [userDetails, setUserDetails] = useState(null)
    useEffect(() => {
        userService.getById(userId).then(({data}) => setUserDetails(data))
    }, [userId])
    return (
        <div>
            {userDetails && <UserDetails userDetails={userDetails}/>}
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};