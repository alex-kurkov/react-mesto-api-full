import React from 'react';

const Logo = () => (
  <div className="logo">
    <svg width="100%" height="100%" viewBox="0 0 143 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.876465 6.81818V33H4.63499V14.0412H4.87789L12.5995 32.9616H15.7188L23.4404 14.054H23.6833V33H27.4418V6.81818H22.6478L14.3125 27.1705H14.0057L5.6705 6.81818H0.876465Z" fill="white"/>
      <path d="M41.3413 33.3963C45.624 33.3963 48.6538 31.2869 49.5231 28.0909L45.9052 27.4389C45.2149 29.2926 43.553 30.2386 41.3797 30.2386C38.1069 30.2386 35.9081 28.1165 35.8058 24.3324H49.766V22.9773C49.766 15.8821 45.5217 13.108 41.0728 13.108C35.6013 13.108 31.9961 17.2756 31.9961 23.3097C31.9961 29.4077 35.5501 33.3963 41.3413 33.3963ZM35.8186 21.4688C35.972 18.6818 37.9919 16.2656 41.0984 16.2656C44.0643 16.2656 46.0075 18.4645 46.0203 21.4688H35.8186Z" fill="white"/>
      <path d="M68.7216 18.1577C67.929 15.1023 65.5384 13.108 61.2941 13.108C56.858 13.108 53.7131 15.4474 53.7131 18.9247C53.7131 21.7116 55.4006 23.5653 59.0824 24.3835L62.4063 25.1122C64.2983 25.5341 65.1804 26.3778 65.1804 27.6051C65.1804 29.1264 63.5569 30.3153 61.0512 30.3153C58.7628 30.3153 57.2927 29.331 56.8324 27.4006L53.1378 27.9631C53.777 31.4403 56.6662 33.3963 61.0768 33.3963C65.8196 33.3963 69.1052 30.8778 69.1052 27.3239C69.1052 24.5497 67.341 22.8366 63.7358 22.0057L60.6165 21.2898C58.456 20.7784 57.5228 20.0497 57.5356 18.7202C57.5228 17.2116 59.1591 16.1378 61.3324 16.1378C63.7103 16.1378 64.8097 17.4545 65.2571 18.7713L68.7216 18.1577Z" fill="white"/>
      <path d="M82.4741 13.3636H78.4471V8.65909H74.6247V13.3636H71.7483V16.4318H74.6247V28.027C74.6119 31.5938 77.3349 33.3196 80.352 33.2557C81.5665 33.2429 82.3846 33.0128 82.8321 32.8466L82.1417 29.6889C81.8861 29.7401 81.413 29.8551 80.7994 29.8551C79.5593 29.8551 78.4471 29.446 78.4471 27.2344V16.4318H82.4741V13.3636Z" fill="white"/>
      <path d="M94.7628 33.3963C100.298 33.3963 103.916 29.3438 103.916 23.2713C103.916 17.1605 100.298 13.108 94.7628 13.108C89.2273 13.108 85.6094 17.1605 85.6094 23.2713C85.6094 29.3438 89.2273 33.3963 94.7628 33.3963ZM94.7756 30.1875C91.1577 30.1875 89.4702 27.0298 89.4702 23.2585C89.4702 19.5 91.1577 16.304 94.7756 16.304C98.3679 16.304 100.055 19.5 100.055 23.2585C100.055 27.0298 98.3679 30.1875 94.7756 30.1875Z" fill="white"/>
      <path d="M108.057 9H109.114V5.59091H111.023C111.099 5.59091 111.172 5.59091 111.244 5.58665L113.085 9H114.313L112.34 5.39489C113.452 5.01562 113.972 4.10795 113.972 2.94886C113.972 1.40625 113.051 0.272727 111.006 0.272727H108.057V9ZM109.114 4.63636V1.21023H110.972C112.386 1.21023 112.932 1.90057 112.932 2.94886C112.932 3.99716 112.386 4.63636 110.989 4.63636H109.114Z" fill="white"/>
      <path d="M119.721 6.32386C119.721 7.55114 118.784 8.11364 118.034 8.11364C117.199 8.11364 116.602 7.5 116.602 6.54545V2.45455H115.596V6.61364C115.596 8.28409 116.483 9.08523 117.71 9.08523C118.699 9.08523 119.346 8.55682 119.653 7.89205H119.721V9H120.727V2.45455H119.721V6.32386Z" fill="white"/>
      <path d="M127.205 3.92045C126.89 2.99148 126.183 2.36932 124.887 2.36932C123.506 2.36932 122.484 3.15341 122.484 4.26136C122.484 5.16477 123.021 5.76989 124.222 6.05114L125.313 6.30682C125.974 6.46023 126.285 6.77557 126.285 7.22727C126.285 7.78977 125.688 8.25 124.751 8.25C123.928 8.25 123.413 7.89631 123.234 7.19318L122.279 7.43182C122.514 8.54403 123.43 9.13636 124.768 9.13636C126.289 9.13636 127.325 8.3054 127.325 7.17614C127.325 6.2642 126.754 5.68892 125.586 5.40341L124.614 5.16477C123.839 4.97301 123.489 4.71307 123.489 4.21023C123.489 3.64773 124.086 3.23864 124.887 3.23864C125.765 3.23864 126.127 3.72443 126.302 4.17614L127.205 3.92045Z" fill="white"/>
      <path d="M133.475 3.92045C133.159 2.99148 132.452 2.36932 131.157 2.36932C129.776 2.36932 128.753 3.15341 128.753 4.26136C128.753 5.16477 129.29 5.76989 130.492 6.05114L131.583 6.30682C132.243 6.46023 132.554 6.77557 132.554 7.22727C132.554 7.78977 131.958 8.25 131.02 8.25C130.198 8.25 129.682 7.89631 129.503 7.19318L128.549 7.43182C128.783 8.54403 129.699 9.13636 131.037 9.13636C132.559 9.13636 133.594 8.3054 133.594 7.17614C133.594 6.2642 133.023 5.68892 131.856 5.40341L130.884 5.16477C130.108 4.97301 129.759 4.71307 129.759 4.21023C129.759 3.64773 130.356 3.23864 131.157 3.23864C132.034 3.23864 132.397 3.72443 132.571 4.17614L133.475 3.92045Z" fill="white"/>
      <path d="M135.108 9H136.114V2.45455H135.108V9ZM135.619 1.36364C136.011 1.36364 136.335 1.05682 136.335 0.681818C136.335 0.306818 136.011 0 135.619 0C135.227 0 134.903 0.306818 134.903 0.681818C134.903 1.05682 135.227 1.36364 135.619 1.36364Z" fill="white"/>
      <path d="M139.882 9.15341C141.024 9.15341 141.62 8.53977 141.825 8.11364H141.876V9H142.882V4.6875C142.882 2.60795 141.297 2.36932 140.461 2.36932C139.473 2.36932 138.348 2.71023 137.836 3.90341L138.791 4.24432C139.012 3.76705 139.537 3.25568 140.495 3.25568C141.42 3.25568 141.876 3.74574 141.876 4.58523V4.61932C141.876 5.10511 141.382 5.0625 140.189 5.21591C138.974 5.37358 137.649 5.64205 137.649 7.14205C137.649 8.42045 138.637 9.15341 139.882 9.15341ZM140.035 8.25C139.234 8.25 138.655 7.89205 138.655 7.19318C138.655 6.42614 139.353 6.1875 140.137 6.08523C140.564 6.03409 141.706 5.91477 141.876 5.71023V6.63068C141.876 7.44886 141.228 8.25 140.035 8.25Z" fill="white"/>
    </svg>
  </div>
)

export default Logo;