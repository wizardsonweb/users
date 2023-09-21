import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

function UsersList() {
    const users = useSelector((state) => state.users);

    return (
        <section>
            <h1>Users</h1>
            <div className="row">
                {
                    users.map((user, index) => {
                        return (
                            <Link 
                                key={index} 
                                className="user" 
                                to={'user/' + user.id}
                                title={user.name}
                            >
                                <img src={user.avatar} alt={user.name} />
                                <h3>{user.name + ' ' + user.surname}</h3>
                                <p>{user.title}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default UsersList;