// ARV
import React, { useContext, useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./AssetBalances.module.sass";

import CreateLendContext from "../../../context/LendContext";

// const items = [
//   {
//     escrowId: 0,
//     apy: "7.46",
//     amount: "50.5678",
//     tenure: "30",
//     insured: "True",
//   }
// ];

// overview page items

const AssetBalances = ({ overview, lender, borrower }) => {
  const { listNftToMarketplace, borrowerList, lenderList } =
    useContext(CreateLendContext);

  const [ended, setEnded] = useState(true);

  let items;

  if (overview) {
    console.log("Overview dashboard");
    items = [...borrowerList, ...lenderList];
  }

  if (lender) {
    console.log("Lender dashboard");
    items = lenderList;
  }

  if (borrower) {
    console.log("Borrower dashboard");
    items = borrowerList;
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.col}>Offer ID</div>
          <div className={styles.col}>APY</div>
          <div className={styles.col}>Amount</div>
          <div className={styles.col}>Tenure</div>
          <div className={styles.col}>Insured</div>
          <div className={styles.col}>Status</div>
        </div>
        {items.length !== 0 ? (
          <p
            style={{
              color: "#ffffff",
              fontSize: "16px",
              padding: "0 16px",
              height: "40px",
              borderRadius: "20px",
              fontWeight: 700,
              paddingTop: "7px",
            }}
          >
            No records found
          </p>
        ) : (
          //          items.map((x, index) => (
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.currency}>
                {/* <div className={styles.icon}>
                  <img src={x.icon} alt="Currency" />
                </div> */}
                <div className={styles.details}>
                  {/* <div className={styles.info}>{`# ${x.escrowId}`}</div> */}
                  <div className={styles.info}>001</div>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              {/* {x.apy && (
                  <div className={cn("category-green", styles.category)}>
                    {`${x.apy} % APY`}
                  </div>
                )} */}
              <div className={cn("category-green", styles.category)}>15</div>
            </div>
            <div className={styles.col}>
              {/* <div className={styles.info}>{`${x.amount} TFil`}</div> */}
              <div className={styles.info}>2 TFil</div>
            </div>
            <div className={styles.col}>
              {/* <div className={styles.info}>{`${x.tenure} days`}</div> */}
              <div className={styles.info}>{`7 days`}</div>
            </div>
            <div className={styles.col}>
              {/* <div className={styles.info}>{`${x.isInsuared}`}</div> */}
              <div className={styles.info}>True</div>
            </div>
            <div className={styles.col}>
              <div
                className={`${styles.info} ${
                  ended ? styles.ended : styles.ongoing
                }`}
              >
                {ended ? "Ended" : "Ongoing"}
              </div>
            </div>
          </div>
          //          ))
        )}
      </div>
    </div>
  );
};

export default AssetBalances;
