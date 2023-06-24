import React from "react";
import "./home.css";

const home = () => {
  return (
    <div>
      <div className="rectangleBox">
        <nav className="navbar">
          <ul className="nav-menu">
            <li className="nav-item">Çözüm ve Hizmetler</li>
            <li className="nav-item">Ürünler</li>
            <li className="nav-item">Teknolojiler</li>
            <li className="nav-item">İnsan Kaynakları</li>
            <li className="nav-item">Kurumsal</li>
            <button className="btn1">İletişim</button>
          </ul>
        </nav>

        <div className="headingBox">
          <p className="heading">Bilgi Teknolojilerinde 23 Yıllık Tecrübe</p>
          <p className="para">
            Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için
            farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje
            Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
          </p>

          <img src="assets/input.png" alt="" className="inputBox"/>
        </div>

        <div className="landing-image-container">
          <img src="assets/rec.png" alt="Landing" className="landing-image" />
        </div>
      </div>

      <div className="iconBox">
        <h2 className="iconHeading">Kalite ve Süreç Yönetimi</h2>
        <p className="iconPara">
          Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için
          farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje
          Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
        </p>

        <div className="product-container">
          <div className="product-box">
            <img src="assets/png1.png" alt="" className="product-image" />
            <h4 className="product-title">Döküman Analizi</h4>
            <p className="product-description">
              Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus
              amet, elementum.
            </p>
          </div>

          <div className="product-box">
            <img src="assets/png2.png" alt="" className="product-image" />
            <h4 className="product-title">Kabul ve Değerlendirme</h4>
            <p className="product-description">
              Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus
              amet, elementum.
            </p>
          </div>

          <div className="product-box">
            <img src="assets/png3.png" alt="" className="product-image" />
            <h4 className="product-title">İş Kuralları Analizi</h4>
            <p className="product-description">
              Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus
              amet, elementum.
            </p>
          </div>

          <div className="product-box">
            <img src="assets/png4.png" alt="" className="product-image" />
            <h4 className="product-title">Akış Diyagramları</h4>
            <p className="product-description">
              Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus
              amet, elementum.
            </p>
          </div>

          <div className="product-box">
            <img src="assets/png5.png" alt="" className="product-image" />
            <h4 className="product-title">Paydaş Analizi</h4>
            <p className="product-description">
              Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus
              amet, elementum.
            </p>
          </div>

          <div className="product-box">
            <img src="assets/png6.png" alt="" className="product-image" />
            <h4 className="product-title">Prototipleme</h4>
            <p className="product-description">
              Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus
              amet, elementum.
            </p>
          </div>
        </div>
      </div>

      <div className="redBox">
        <img src="assets/redframe.png" alt="" className="frameImage" />
      </div>

      <div className="illuBox">
        <div className="desc">
          <h2 className="descHeading">Kalite ve Süreç Yönetimi</h2>
          <p className="descPara">
            Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP®
            sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır.
            Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz
            alanları güçlendirmek, uluslararası geçerliliği olan PMI®
            metodolojisini şirketinizde uygulamak ve geliştirmek için
            yanınızdayız.
          </p>

          <button className="btn2">Keşfet</button>
        </div>
        <div>
          <img src="assets/illustration.jpg" alt="" className="illuImage" />
        </div>

        <div>
          <img src="assets/illustration2.jpg" alt="" className="illuImage2" />
        </div>

        <div className="desc">
          <h2 className="descHeading2">Test Yönetimi ve Analizi</h2>
          <p className="descPara2">
            Danışmanlığını yürüttüğümüz projelerde yazılım hatalarını önlemek
            amacıyla gerçekleştirdiğimiz testleri her proje aşamasında manuel ya
            da test otomasyonu ile dikkatle uygulamaktayız. Deneyimli test
            ekibimiz, kurumlara yüksek kalitede yazılım testleri hizmeti ile
            baştan sona güvenli, kaliteli ve tatmin edici bir müşteri deneyimi
            sunmaktadır.
          </p>

          <button className="btn3">Keşfet</button>
        </div>
      </div>

      <div className="greySpace">
        <h3 className="greyHeading">Referanslarımız</h3>
        <p className="greyPara">Bize güvenen ve beraber çalıştığımız iş ortaklarımız</p>
        <img src="assets/logos.png" alt="" className="greyImage"/>
      </div>

      <div className="userBox">
        <img src="assets/Users.png" alt="" className="userImage"/>
        <h2 className="userHeading">Bize Ulaşın</h2>
        <p className="userPara">
          Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle
          irtibata geçin.
        </p>
        <button className="btn4">Bize Ulaşın</button>
      </div>

      <div className="footer">
        <div className="footerBox">
          <ul className="col1">
            <li>
              <b className="heading2">Çözüm ve Hizmetler</b>
            </li>
            <li>Yazılım Geliştirme</li>
            <li>Outsourcing</li>
            <li>Kalite ve Süreç Yönetimi</li>
            <li>Danışmanlık</li>
            <li>IoT Destekli Çözümler</li>
          </ul>

          <ul className="col2">
            <li>
              <b className="heading2">Ürünler</b>
            </li>
            <li>Eğitim Yönetim Sistemi</li>
            <li>İnsan Sermayesi Yönetim Sistemi</li>
            <li>Müşteri İlişkileri Yönetim Sistemi</li>
            <li>İçerik Yönetim Sistemi</li>
          </ul>

          <ul className="col3">
            <li>
              <b className="heading2">Kurumsal</b>
            </li>
            <li>Hakkımızda</li>
            <li>Belge ve Yetkinlikler</li>
            <li>İş Ortakları</li>
          </ul>

          <ul className="col4">
            <li>
              <b className="heading2">İletişim</b>
            </li>
            <li>Bilgi İstek Formu</li>
            <li>Uzman Talep Formu</li>
          </ul>

          <div className="col5">
            <img className="social" src="assets/social.png" alt="" />
          </div>

          <p className="copyright">© Copyright 2010-2021 - Can Çevik</p>
        </div>
      </div>
    </div>
  );
};

export default home;
