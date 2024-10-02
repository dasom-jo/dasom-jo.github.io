/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: '.next',  // 빌드 디렉토리 설정 (기본값은 '.next')
    images: {
      domains: ['www.google.com', 'tistory.com'], // 외부 도메인 허용 설정
    },
  };

  export default nextConfig;
