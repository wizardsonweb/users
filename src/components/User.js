import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

function User() {
    const { uid } = useParams();
    const users = useSelector((state) => state.users);
    const user = users.find((user) => user.id === parseInt(uid));

    return (
        <section>
            <Link className="back" to="/">Go Back</Link>
            <div className="user">
                <img src={user.avatar} alt={user.name} />
                <h3>{user.name} {user.surname}</h3>
                <p>{user.title}</p>
                <ul className="info">
                    <li>
                        <p>
                            DOB: { user.dob }
                        </p>
                    </li>
                    <li>
                        <p>
                            City: { user.city }
                        </p>
                    </li>
                    <li>
                        <p>
                            Street: { user.street }
                        </p>
                    </li>
                    <li>
                        <p>
                            Address: { user.address }
                        </p>
                    </li>
                    <li>
                        <p>
                            Country: { user.country }
                        </p>
                    </li>
                    <li>
                        <p>
                           Email: { user.email }
                        </p>
                    </li>
                    <li>
                        <p>
                            Phone: { user.phone }
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default User;