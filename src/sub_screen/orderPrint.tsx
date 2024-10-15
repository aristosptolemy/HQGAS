import React, { useEffect, useState } from 'react';

import '../css/orderPrint.css';

interface SettingProps {
  setCurrentPage: (page: string) => void;
  printData: any;
  storename: string;
  dataPages: number;
}

const NowDate = () => {
  const today = new Date();
  const todayDate = today.toLocaleDateString('ja-JP-u-ca-japanese', {
    dateStyle: 'long'
  })
  return todayDate;
};



export default function PrintPage({ setCurrentPage, printData, storename, dataPages }: SettingProps) {
  const Date = NowDate();
  const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

  // useEffect(() => {
  //   (async() => {
  //     await sleep(500);
  //     await window.print();
  //   })()
  // },[]);


  return (
    <div className="print-area">
      <div className="printData">
        <table className="printData">
          <thead>
            <tr>
              <th colSpan="2">
                {Date}
              </th>
            </tr>
            <tr className="storename">
              <th className="print-storename" colSpan="9">{storename}</th>
            </tr>
            <tr className="print-table-header">
              <th>業者</th>
              <th>商品コード</th>
              <th>商品名</th>
              <th>商品詳細</th>
              <th>数量</th>
              <th>個人購入</th>
              <th>備考</th>
              <th>確認</th>
              <th>確認</th>
            </tr>
          </thead>
          <tbody>
          {printData.map((row, index) => (
            <>
              {(index % 26 === 0 && index > 1) && (
                <>
                  <tr key={`condition-${index}`}>
                    <td colSpan="9" className="special-row">
                      {index/26}/{dataPages}
                    </td>
                  </tr>
                </>
              )}
              <tr key={index}>
                <td className="P-vender">{row[2]}</td>
                <td className="P-code">{row[3]}</td>
                <td className="P-name">{row[4]}</td>
                <td className="P-detail">{row[5]}</td>
                <td className="P-number">{row[6]}</td>
                <td className="P-personal">{row[9]}</td>
                <td className="P-remarks">{row[10]}</td>
                <td className="chack-cell"></td>
                <td className="chack-cell"></td>
              </tr>
            </>
          ))}
          <>
            <tr key="last-condition">
              <td colSpan="9" className="special-row">
                {dataPages}/{dataPages}
              </td>
            </tr>
          </>
          </tbody>
        </table>
      </div>
    </div>
  );
}