const RegisterForm = () => {
    return (
        <div>
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <div id="emailHelp" className="form-text">Enter an Email address.</div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"></input>
                <div id="passwordHelp" className="form-text">Create a Password.</div>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default RegisterForm;