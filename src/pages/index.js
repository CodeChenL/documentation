import React, { useState } from "react";
import Link from '@docusaurus/Link';
import { Select, Space, ConfigProvider } from 'antd';
import Layout from '@theme/Layout';
import styles from './index.module.css'
import { getDocs } from "../utils/getDocs";
import { getProduct_Line, getProduct_Name, getProduct_doc } from "../utils/getPriducts";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate from '@docusaurus/Translate';


export default () => {
  const { i18n } = useDocusaurusContext();
  const homeDoc = getDocs().Home.sidebar_custom_props.product_docs
  const provinceData = getProduct_Line(homeDoc)
  const cityData = getProduct_Name(homeDoc)
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0])
  const element = getProduct_doc(homeDoc, secondCity)


  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };
  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };


  return (
    <Layout>
      <div style={{ backgroundColor: "rgb(249, 249, 249)" }}>
        <ConfigProvider theme={{
          token: {
            colorPrimary: '#fff',
          },
        }} >
          <div className={styles.selectBox}>
            <div className={styles.centerBox}>
              <h1 className={styles.seleH}><Translate id='HomePageTitle'></Translate></h1>
              <p className={styles.seleP}><Translate id='HomePageIntroduction'></Translate></p>
              <div className={styles.spaceBox}>
                <Space wrap>
                  <Select
                    placement='bottomRight'
                    bordered='false'
                    defaultValue={provinceData[0]}
                    onChange={handleProvinceChange}
                    options={provinceData.map((province) => ({
                      label: province,
                      value: province,
                    }))}
                  />
                  <Select
                    bordered='false'
                    value={secondCity}
                    onChange={onSecondCityChange}
                    options={cities.map((city) => ({
                      label: city,
                      value: city,
                    }))}
                  />
                </Space>
              </div>
              <div style={{ float: 'right' }}>
              </div>
            </div>
          </div>
          <div className={styles.list}>
            <h1>
              {secondCity === "ROCK 5B" ? 'ROCK 5 Model B' : secondCity === "ROCK 5A" ? 'ROCK 5 Model A' : secondCity === "ROCK 3C" ? 'ROCK 3 Model C' : null}
            </h1>
            <ul className={styles.card} >
              {
                element.map((item, idx) => {
                  return (
                    <li key={idx} className={styles.doc}>
                      <Link to={item.url}>
                        <div className={styles.goTo}>
                          <h1 className={styles.goH1}>{i18n.currentLocale === 'zh' ? item.title_zh : item.title_en}</h1>
                          <div className={styles.goToIcon}></div>
                        </div>
                        <p>{i18n.currentLocale === 'zh' ? item.info_zh : item.info_en}</p>
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </ConfigProvider>
      </div>
    </Layout>
  )
}
