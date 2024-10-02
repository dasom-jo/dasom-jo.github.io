/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: '.next',  // 빌드 디렉토리 설정 (이 설정이 없어도 기본값은 '.next'입니다.)
    images: {
      domains: ['www.google.com', 'tistory.com'], // 외부 도메인 허용 설정
    },
  };

  module.exports = nextConfig;
