<script></script>
<template>
  <div></div>
</template>
<style lang="scss">
.signup {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;

  &-container {
    padding: 0 10rem 10rem 10rem;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;
  }

  &-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;
    padding: 3rem 5rem;
    border-radius: 1rem;
    background-color: white;
    &-title {
      color: orangered;
      font-size: 2.4rem;
      font-weight: 600;
    }
    &-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      &-input {
        p {
          font-size: 1.6rem;
          color: black;
          margin-bottom: 0.5rem;
        }
        input {
          background-color: transparent;
          border: none;
          outline: none;
          padding: 1rem 3rem;
          font-size: 1.6rem;
          color: orangered;
          border-radius: 0.5rem;
          border: solid 2px orangered;
        }
      }
      button {
        background-color: orangered;
        border: none;
        outline: none;
        padding: 1rem 3rem;
        border-radius: 0.5rem;
        color: white;
        font-size: 2rem;
      }
    }
  }
}
</style>
