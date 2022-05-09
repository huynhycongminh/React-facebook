import React from "react";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { auth } from "../../data/index";
import { loginUser } from "../../redux/actions/userAction/action";
import "./login.scss";

const textLogo = "facebook";
const textSloganLeft =
  " Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn";
const textBtnLogin = "Đăng nhập";
const textLinkForgotPassword = "Quên mật khẩu";
const textBtnCreateNew = "Tạo tài khoản mới";
const textNewPage = "Tạo mới";
const textSloganRight = "dành cho người nổi tiếng, nhãn hiệu hoặc doanh nghiệp";
const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const { email, password } = state;

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(state);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    } else if (values.password.length > 20) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(state));
    setIsSubmit(true);
    if (!email || !password) return toast.info("please fill in all fields");
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        const data = {
          user: user.user.providerData[0],
          id: user.user.uid,
        };
        dispatch(loginUser(data));
        toast.success("you are login successfully");
        history.push("/admin/dashboard");
      })
      .catch((err) => {
        toast.error("invalid email or password");
      });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="main">
      <div className="contentLeft">
        <h1 className="logo">{textLogo}</h1>
        <p className="slogan">{textSloganLeft}</p>
      </div>
      <form className="contentRight" onSubmit={handleSubmit}>
        <TextField
          type="email"
          id="outlined-basic"
          label="Email hoặc số điện thoại"
          variant="outlined"
          className="text"
          onChange={handleChange}
          name="email"
          required
          value={state.email}
        />
        <p>{formErrors.email}</p>
        <br />
        <TextField
          type="password"
          id="outlined-basic"
          label="mật khẩu"
          className="text"
          onChange={handleChange}
          name="password"
          required
          value={state.password}
        />
        <p>{formErrors.password}</p>
        <br />
        <Button variant="contained" className="loginBtn" type="submit">
          {textBtnLogin}
        </Button>
        <div className="link">
          <a href="/" className="linkForgotPassword">
            {textLinkForgotPassword}
          </a>
        </div>
        <div className="createBtn">
          <a href="/" className="createBtnAccount">
            {textBtnCreateNew}
          </a>
        </div>
      </form>
      <div className="sloganRight">
        <a href="/" className="newPage">
          {textNewPage}
        </a>{" "}
        {textSloganRight}
      </div>
    </div>
  );
};

export default Login;
