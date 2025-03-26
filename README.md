# 개요
- 유저 관리 시스템

# 사용 기술
## 베이스
- react 18
- typescript
- npm
## 디자인
- ant design
## 빌드
- vite
## 데이터 관리
- zustand
- zod

# 구동하는 법
- .env를 남겨두었습니다.`STORAGE`에 `local-storage` 또는 `in-memory`를 지정해주세요.
- 패키지 설치: `npm install`
- 개발 서버 구동: `npm run dev`

# 기능
- 회원 CRUD
- 필터링

# 고려 사항
- 체크박스 컬럼은 동작만 합니다. 콘솔 로그로 확인 가능합니다.
- 기본 데이터 2개를 지워도 새로고침 || 재구동시 다시 복구 가능하도록 했습니다.  