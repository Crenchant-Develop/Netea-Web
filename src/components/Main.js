import { Link } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../Theme';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../App.css';

export default function Main() {
    return (
        <div className="main">
            <h2>NETE▲</h2>
            <h5>당신이 만드는 일대기, 네티아</h5>
            <Stack spacing={2} direction="row" className="context">
                <ThemeProvider theme={Theme}>
                    <ChangeButton />
                </ThemeProvider>
            </Stack>
        </div>
    );
}

function ChangeButton() {
    const authUrl = `https://discord.com/api/oauth2/authorize?client_id=962607441382625360&redirect_uri=http%3A%2F%2Fchronica-web.vercel.app%2Fgetuser&response_type=code&scope=identify&prompt=none`;
    //const authUrl = 'https://discord.com/api/oauth2/authorize?client_id=962607441382625360&redirect_uri=http%3A%2F%2Flocalhost%3A3030%2Fgetuser&response_type=code&scope=identify&prompt=none';
    var isLogined = sessionStorage.getItem('userName') ? true : false;

    if (isLogined) {
        return (
            <Link to="/getuser" style={{ textDecoration: 'none' }}>
                <Button variant="contained" size="large">
                    유저 화면으로
                </Button>
            </Link>
        );
    } else {
        return (
            <Button variant="contained" size="large" onClick={(event) => {
                event.stopPropagation();
                window.open(authUrl, "_self");
            }}>
                디스코드 로그인
            </Button>
        );
    }
}