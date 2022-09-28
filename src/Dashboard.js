import "./Dashboard.css"

function Dashboard({database:db}) {
    const unames = Object.keys(db)
    return(
        <div>
            <h1>Dashboard</h1>
            <form>
            <input type="text" className="search" name="search" required="required" placeholder="Search......"/>

            </form>

                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Position</th>
                            </tr>
                        </thead>
                        <tbody>
                        {unames.map(item => (
                            <tr>
                                <td>{item}</td>
                                <td>{db[item].position}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <h2>Add User</h2>
                    <form>
                        <input type="text" name="fullname" required="required" placeholder="Enter username"/>&nbsp;
                        <input type="text" name="position" required="required" placeholder="Enter position"/>&nbsp;
                        <button >ADD</button>&nbsp;
                        <button >DELETE</button>
                    </form>
        </div>
    )
}

export default Dashboard;