<h1 align="center">도비랜드 백엔드</h1>

<br />

<h3 align="center">프로젝트 목차</h3>
<h4 align="center"><a href="https://github.com/dobbyland/dobbyland_frontend_react">frontend</a></h4>
<h4 align="center"> >> BACKEND << </h4>

<br />

### 1. 기술스택

```plaintext
Server: Node.js, Express
DBMS: MySQL
ORM: Sequelize
Cloud: GCP
```

<br />

### 2. 스크립트

루트 디렉토리에서 다음 스크립트를 사용할 수 있습니다 :

`npm install` : package.json을 참조하여 node_modules를 설치합니다.

`npm start` : 서버를 [http://localhost:5000](http://localhost:5000) 에서 실행합니다.

`npm run dev` : 개발모드로 서버를 실행합니다. (`npm start` 와 같으나 `nodemon --watch server` 기능을 사용하여 파일변화를 감지하면 서버를 자동으로 재실행합니다.)

`npm run sync` : DB를 게시합니다.

`pm2 ls` : pm2에 등록된 리스트를 확인합니다.

<br />

### 3. SSH 접속

 `ssh YOUR_UBUNTU_ACCOUNT@dobbyland.com`

<br />
