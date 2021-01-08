<template>
  <div style="width: 100%; padding: 0 16px;">
    <div class="footer-upper">
      <div class="footer__logo">
        <img src="@/assets/img/GP-logo-2019-white-[web].png" alt="綠色和平" />
      </div>
      <div class="footer__text">
        <div class="footer__note">
          <p>
            綠色和平存在，因為脆弱的地球需要改變、需要行動。
            <br />但保護地球的使命不能僅靠綠色和平來完成，唯有結合你的力量，才能夠讓地球變得更綠色、更和平。
          </p>
        </div>
      </div>
      <div class="footer__links">
        <ul>
          <li>
            <a href="http://www.greenpeace.org/hk/">首頁</a>
          </li>
          <li>
            <a href="https://act.greenpeace.org/page/4663/donate/1">捐助支持</a>
          </li>
          <li>
            <a
              href="http://www.greenpeace.org/hk/about/privacy/"
              title="私隱政策與個人資料收集聲明"
            >私隱政策與個人資料收集聲明</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-lower">
      <div class="footer__credit">
        <p>© GREENPEACE {{new Date().getFullYear()}}</p>
      </div>
    </div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.footer-upper {
  display: grid;
  padding: 2rem 0;
  grid-gap: 1rem;
  // grid-template-columns: repeat(2, minmax(320px, 1fr));
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
}
.footer-lower {
  border-top: 1px solid white;
}
.footer__logo {
  grid-column: 1 / -1;
  img {
    max-width: 200px;
  }
}
.footer__text {
  color: white;
  max-width: 480px;
  line-height: 2;
}
.footer__links {
  margin-top: 20px;
  margin-bottom: 20px;
  color: white;
  @media (min-width: 576px) {
    text-align: right;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li + li {
    margin-top: 8px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: color 0.2s ease-in;
    &:hover {
      color: #6c0;
    }
  }
}
.footer__credit {
  color: white;
}
</style>
