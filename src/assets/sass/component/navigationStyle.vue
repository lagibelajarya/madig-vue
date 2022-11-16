<style lang="scss">
$lightGreen: #9aeba3;
$mediumGreen: #13678a;
$darkGreen: #012030;
.navigation {
  position: fixed;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 100;
  &-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
  &-button {
    font-size: 2rem;
    position: fixed;
    top: 5rem;
    right: 5rem;
  }
  &-left {
    img {
      height: 100%;
      width: 100%;
    }
  }
  &-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    &-link {
      width: 100%;
      padding: 0.5rem 5rem;
      text-decoration: none;
      font-size: 3rem;
      font-weight: 500;
      color: white;
      text-align: center;

      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        color: white;
        text-transform: uppercase;
        background-image: linear-gradient(
          120deg,
          transparent 0%,
          transparent 50%,
          white 50%
        );
        background-size: 230%;
        transition: all 0.4s;
      }
      &:hover,
      &:active {
        background-position: 100%;
        color: $mediumGreen;
        transform: translateX(1rem);
      }
      &.active {
        background-position: 100%;
        color: $mediumGreen;
        transform: translateX(1rem);
      }
    }
  }
}
.nav {
  &-bg {
    width: 6rem;
    height: 6rem;
    transform: scale(1);
    border-radius: 50%;
    position: fixed;
    top: 3rem;
    right: 3.5rem;
    background-image: radial-gradient($lightGreen, $mediumGreen, $darkGreen);
    z-index: 99;
    transition: transform 0.8s cubic-bezier(0.83, 0, 0.17, 1);
  }
  &-btn {
    position: fixed;
    right: 5rem;
    top: 5rem;
    font-size: 3rem;
    font-weight: 600;
    cursor: pointer;
    z-index: 101;
  }
  &-logo {
    padding: 5rem 10rem;
    cursor: pointer;
    z-index: 9;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      height: 3rem;
    }
    p {
      font-size: 3rem;
      font-weight: 600;
      color: white;
    }
  }
}

#button-nav {
  position: relative;
  margin: 0 auto;
  width: 30px;
  height: 20px;
  cursor: pointer;
}

#button-nav span {
  position: absolute;
  height: 3px;
  width: 50%;
  background: #fff;
  opacity: 1;
  transition: 0.25s ease-in-out;
}

#button-nav span:nth-child(1),
#button-nav span:nth-child(2) {
  top: 0;
}

#button-nav span:nth-child(3),
#button-nav span:nth-child(4) {
  top: 10px;
}

#button-nav span:nth-child(5),
#button-nav span:nth-child(6) {
  top: 20px;
}

#button-nav span:nth-child(even) {
  left: 50%;
}

#button-nav.open span:nth-child(1) {
  transform: translateX(5px) translateY(7px) rotate(45deg);
}

#button-nav.open span:nth-child(2) {
  transform: translateX(-5px) translateY(7px) rotate(-45deg);
}

#button-nav.open span:nth-child(3) {
  transform: translateX(-100%);
  opacity: 0;
}

#button-nav.open span:nth-child(4) {
  transform: translateX(100%);
  opacity: 0;
}

#button-nav.open span:nth-child(5) {
  transform: translateX(5px) translateY(-8px) rotate(-45deg);
}

#button-nav.open span:nth-child(6) {
  transform: translateX(-5px) translateY(-8px) rotate(45deg);
}
</style>
<script setup></script>
<template>
  <div></div>
</template>
