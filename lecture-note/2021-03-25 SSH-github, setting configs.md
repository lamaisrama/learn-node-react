> github과 local의 안전한 연결을 위해 SSH 설정을 해봅시다.

### SSH 설정 되어있는지 확인?

cmd에 다음 명령어 쳐보기

- `ls -a ~/.ssh`
- 만약에 `id_rsa`, `id_rsa.pub` 있으면 이미 설정되어 있는 것


1. https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
2. https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account

> config 파일 분기하는 법

developement (dev.js) (local)
    - config.js에서 가져옴

production (prod.js) (deploy)
- 만약 배포를 Heroku에서 한다면, Heroku 웹 애플리케이션에서 setting 할 것.
- 해당 setting에서의 config vars의 key 값이랑 동일하게 저장하기 (mongoURI = process.env.MONGO_URI 에서 MONGO_URI 부분!) 

환경 변수  `process.env.NODE_ENV` -- study 필요 

`key.js` 에서 환경변수 `process.env.NODE_ENV` 를 이용해 분기 처리 & 보호할 정보는 .gitignore에 넣기