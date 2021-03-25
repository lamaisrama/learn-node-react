# Download Mongo DB
> 여기서는 mongo atlas로 연결하는데 
> 
> 나는 우선 로컬로 테스트 하고 싶어서 (?) 로컬로 연결🙄
1. https://www.mongodb.com/try/download/community?tck=docs_server
1. MongoDB Community Server 다운
1. zip 파일 풀어주면 mongo DB 설치 완료! (원하는 위치로 옮겨놓자. 나의 경우에는 d:/dev에 옮겨둠)
1. 해당 위치에서 cmd를 키고 mongod 실행하면 에러가 남 
    - 에러 메세지를 잘 읽어본다.
    - d:/data/db 폴더가 없다고 한다. 
    - 해당 디렉토리 생성하고 다시 실행하면 잘 됨
1. 포트번호 default는 270170~! localhost:270170 로 디비 connection 된 것 확인할 수 있음 <br/> 
(따로 설정 없이 mongod가 실행되면, default directory는 `/data/db/` && Port#27017)
1. mongod.exe를 실행하고 mongo.exe를 실행하면 cmd로 실행할 수 있는 창이 나옴
1. 로컬 몽고DB 설치 완료
---
