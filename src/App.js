import { useRef } from 'react';
import './App.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
      legend: {
          display: true,
      },
  },
  scales: {
      xAxes: {
          display: true,
          ticks: {
              // maxTicksLimit: 6,
              maxRotation: 0,
              minRotation: 0,
          },
          grid: {
            display: false,
          },
      },
      yAxes: {
        grid: {
          display: false,
        },
    },
  },
  elements: {
      point: {
          radius: 0,
      },
  },
};

const stockData = [
  {
    date: "2021-09-20",
    open: 672.6,
    high: 684.6,
    low: 668.8106,
    close: 682.8,
    adjusted_close: 669.4161,
    volume: 3360846
  },
  {
    date: "2021-09-21",
    open: 683.6,
    high: 686.2,
    low: 679.8,
    close: 681,
    adjusted_close: 667.6513,
    volume: 1122402
  },
  {
    date: "2021-09-22",
    open: 680.6,
    high: 698.6,
    low: 676.268,
    close: 692.8,
    adjusted_close: 679.2201,
    volume: 1717526
  },
  {
    date: "2021-09-23",
    open: 698.2,
    high: 706,
    low: 695.8,
    close: 701.4,
    adjusted_close: 687.6515,
    volume: 1305488
  },
  {
    date: "2021-09-24",
    open: 700.4,
    high: 702.4,
    low: 689.6,
    close: 692.4,
    adjusted_close: 678.8279,
    volume: 1681976
  },
  {
    date: "2021-09-27",
    open: 703,
    high: 703,
    low: 688.4,
    close: 694,
    adjusted_close: 680.3965,
    volume: 738349
  },
  {
    date: "2021-09-28",
    open: 701,
    high: 705.6181,
    low: 683.2,
    close: 689.2,
    adjusted_close: 675.6906,
    volume: 2561947
  },
  {
    date: "2021-09-29",
    open: 694.4,
    high: 695.8,
    low: 689.2,
    close: 693.8,
    adjusted_close: 680.2004,
    volume: 982194
  },
  {
    date: "2021-09-30",
    open: 704.6,
    high: 711.2,
    low: 689.8,
    close: 691.8,
    adjusted_close: 678.2396,
    volume: 1017753
  },
  {
    date: "2021-10-01",
    open: 684,
    high: 692.6,
    low: 681.345,
    close: 686,
    adjusted_close: 672.5533,
    volume: 965025
  },
  {
    date: "2021-10-04",
    open: 684.4,
    high: 691,
    low: 680.2,
    close: 687.2,
    adjusted_close: 673.7298,
    volume: 990919
  },
  {
    date: "2021-10-05",
    open: 689.2,
    high: 692.4,
    low: 679,
    close: 679,
    adjusted_close: 665.6906,
    volume: 579746
  },
  {
    date: "2021-10-06",
    open: 678.6,
    high: 680.6035,
    low: 664.4,
    close: 674,
    adjusted_close: 660.7885,
    volume: 1782566
  },
  {
    date: "2021-10-07",
    open: 682.8,
    high: 686.6,
    low: 672.6,
    close: 672.6,
    adjusted_close: 659.416,
    volume: 1007752
  },
  {
    date: "2021-10-08",
    open: 672,
    high: 673.8,
    low: 666.4,
    close: 668.8,
    adjusted_close: 655.6905,
    volume: 2263650
  },
  {
    date: "2021-10-11",
    open: 667.2,
    high: 675,
    low: 663.1729,
    close: 670,
    adjusted_close: 656.867,
    volume: 690458
  },
  {
    date: "2021-10-12",
    open: 665.4,
    high: 672.8,
    low: 662.8,
    close: 666,
    adjusted_close: 652.9454,
    volume: 899559
  },
  {
    date: "2021-10-13",
    open: 662,
    high: 672.4,
    low: 662,
    close: 671.8,
    adjusted_close: 658.6317,
    volume: 3639287
  },
  {
    date: "2021-10-14",
    open: 666.6,
    high: 677.2,
    low: 666.6,
    close: 676.6,
    adjusted_close: 663.3376,
    volume: 628493
  },
  {
    date: "2021-10-15",
    open: 678.8,
    high: 680.6,
    low: 674.6,
    close: 680.2,
    adjusted_close: 666.867,
    volume: 1426091
  },
  {
    date: "2021-10-18",
    open: 675.2,
    high: 678.292,
    low: 669.8,
    close: 675.6,
    adjusted_close: 662.3572,
    volume: 822213
  },
  {
    date: "2021-10-19",
    open: 682.6,
    high: 682.6,
    low: 666.8,
    close: 668.2,
    adjusted_close: 655.1023,
    volume: 643744
  },
  {
    date: "2021-10-20",
    open: 667.4,
    high: 677.8,
    low: 667.4,
    close: 675.2,
    adjusted_close: 661.965,
    volume: 527143
  },
  {
    date: "2021-10-21",
    open: 683.8,
    high: 683.8,
    low: 667,
    close: 667,
    adjusted_close: 653.9258,
    volume: 655150
  },
  {
    date: "2021-10-22",
    open: 667.8,
    high: 672,
    low: 664,
    close: 664,
    adjusted_close: 650.9846,
    volume: 590818
  },
  {
    date: "2021-10-25",
    open: 662,
    high: 669.8,
    low: 659,
    close: 659,
    adjusted_close: 646.0825,
    volume: 1927957
  },
  {
    date: "2021-10-26",
    open: 660.4,
    high: 666,
    low: 659.2,
    close: 661.4,
    adjusted_close: 648.4355,
    volume: 1067306
  },
  {
    date: "2021-10-27",
    open: 662.6,
    high: 663.8,
    low: 652.6,
    close: 657.6,
    adjusted_close: 644.71,
    volume: 1177681
  },
  {
    date: "2021-10-28",
    open: 670,
    high: 670,
    low: 656.2,
    close: 656.2,
    adjusted_close: 643.3375,
    volume: 599234
  },
  {
    date: "2021-10-29",
    open: 664.6,
    high: 664.6,
    low: 648.2,
    close: 648.2,
    adjusted_close: 635.4942,
    volume: 1218346
  },
  {
    date: "2021-11-01",
    open: 645,
    high: 652.1906,
    low: 643.0853,
    close: 648,
    adjusted_close: 635.2982,
    volume: 978985
  },
  {
    date: "2021-11-02",
    open: 652.2,
    high: 657.2,
    low: 642.8,
    close: 646.2,
    adjusted_close: 633.5335,
    volume: 919442
  },
  {
    date: "2021-11-03",
    open: 650,
    high: 650.4,
    low: 643.8,
    close: 649,
    adjusted_close: 636.2786,
    volume: 1474983
  },
  {
    date: "2021-11-04",
    open: 680,
    high: 705.2,
    low: 674,
    close: 681,
    adjusted_close: 667.6513,
    volume: 2544248
  },
  {
    date: "2021-11-05",
    open: 684.4,
    high: 684.4,
    low: 671.8,
    close: 674.8,
    adjusted_close: 661.5729,
    volume: 1540205
  },
  {
    date: "2021-11-08",
    open: 678,
    high: 680.676,
    low: 662,
    close: 668,
    adjusted_close: 654.9061,
    volume: 1082140
  },
  {
    date: "2021-11-09",
    open: 663.4,
    high: 678.4,
    low: 656.7641,
    close: 667.8,
    adjusted_close: 654.7101,
    volume: 1945800
  },
  {
    date: "2021-11-10",
    open: 671.2,
    high: 690.4,
    low: 670.2,
    close: 685,
    adjusted_close: 671.573,
    volume: 1832747
  },
  {
    date: "2021-11-11",
    open: 677,
    high: 688.8,
    low: 677,
    close: 681,
    adjusted_close: 667.6513,
    volume: 1071853
  },
  {
    date: "2021-11-12",
    open: 680.6,
    high: 687,
    low: 677.2,
    close: 682,
    adjusted_close: 668.6318,
    volume: 1097527
  },
  {
    date: "2021-11-15",
    open: 679.2,
    high: 685.8,
    low: 678.1562,
    close: 684.4,
    adjusted_close: 670.9847,
    volume: 852805
  },
  {
    date: "2021-11-16",
    open: 682,
    high: 685.84,
    low: 677.8,
    close: 677.8,
    adjusted_close: 664.5141,
    volume: 1020491
  },
  {
    date: "2021-11-17",
    open: 670,
    high: 682,
    low: 669.4,
    close: 678.8,
    adjusted_close: 665.4944,
    volume: 1921760
  },
  {
    date: "2021-11-18",
    open: 670,
    high: 682.6,
    low: 670,
    close: 677.6,
    adjusted_close: 664.318,
    volume: 650703
  },
  {
    date: "2021-11-19",
    open: 676,
    high: 682.8,
    low: 672.7804,
    close: 677.8,
    adjusted_close: 664.5141,
    volume: 782910
  },
  {
    date: "2021-11-22",
    open: 684.8,
    high: 684.8,
    low: 668.4,
    close: 668.4,
    adjusted_close: 655.2983,
    volume: 1111006
  },
  {
    date: "2021-11-23",
    open: 670,
    high: 671,
    low: 666.2,
    close: 666.6,
    adjusted_close: 653.5336,
    volume: 807480
  },
  {
    date: "2021-11-24",
    open: 666.8,
    high: 668,
    low: 656,
    close: 656,
    adjusted_close: 643.1413,
    volume: 1281754
  },
  {
    date: "2021-11-25",
    open: 648.2,
    high: 654.6,
    low: 643.6,
    close: 652,
    adjusted_close: 648.1116,
    volume: 916558
  },
  {
    date: "2021-11-26",
    open: 644,
    high: 648.8,
    low: 637.4,
    close: 643.2,
    adjusted_close: 639.364,
    volume: 3264869
  },
  {
    date: "2021-11-29",
    open: 646.6,
    high: 649,
    low: 639.4,
    close: 641.2,
    adjusted_close: 637.376,
    volume: 925770
  },
  {
    date: "2021-11-30",
    open: 637,
    high: 638.4,
    low: 628.344,
    close: 629.4,
    adjusted_close: 625.6463,
    volume: 1575751
  },
  {
    date: "2021-12-01",
    open: 632.4,
    high: 635.6,
    low: 625.6,
    close: 631.6,
    adjusted_close: 627.8332,
    volume: 1143121
  },
  {
    date: "2021-12-02",
    open: 626.2,
    high: 636.2,
    low: 624.4,
    close: 631.8,
    adjusted_close: 628.032,
    volume: 785660
  },
  {
    date: "2021-12-03",
    open: 636,
    high: 637.8,
    low: 631.2,
    close: 635.6,
    adjusted_close: 631.8093,
    volume: 1127659
  },
  {
    date: "2021-12-06",
    open: 642.4,
    high: 648.6,
    low: 639.2,
    close: 648.4,
    adjusted_close: 644.5331,
    volume: 991537
  },
  {
    date: "2021-12-07",
    open: 649.4,
    high: 653.6,
    low: 647,
    close: 647.4,
    adjusted_close: 643.539,
    volume: 2558978
  },
  {
    date: "2021-12-08",
    open: 650.4,
    high: 656.2,
    low: 644.2,
    close: 644.2,
    adjusted_close: 640.3581,
    volume: 1326937
  },
  {
    date: "2021-12-09",
    open: 647.6,
    high: 649.6,
    low: 643,
    close: 643,
    adjusted_close: 639.1653,
    volume: 2562133
  },
  {
    date: "2021-12-10",
    open: 646,
    high: 652.5314,
    low: 643.4,
    close: 650.4,
    adjusted_close: 646.5211,
    volume: 839732
  },
  {
    date: "2021-12-13",
    open: 649,
    high: 652.2,
    low: 644.2,
    close: 649,
    adjusted_close: 645.1295,
    volume: 1887396
  },
  {
    date: "2021-12-14",
    open: 659.6,
    high: 659.6,
    low: 647.8,
    close: 653.2,
    adjusted_close: 649.3044,
    volume: 2193633
  },
  {
    date: "2021-12-15",
    open: 651.6,
    high: 655.8,
    low: 646.4,
    close: 646.4,
    adjusted_close: 642.5449,
    volume: 1557030
  },
  {
    date: "2021-12-16",
    open: 651.8,
    high: 654,
    low: 646.6,
    close: 653,
    adjusted_close: 649.1056,
    volume: 1026817
  },
  {
    date: "2021-12-17",
    open: 651.8,
    high: 658.6,
    low: 649.6,
    close: 655.4,
    adjusted_close: 651.4913,
    volume: 2411046
  },
  {
    date: "2021-12-20",
    open: 649.6,
    high: 650.8,
    low: 642.2,
    close: 643.8,
    adjusted_close: 639.9605,
    volume: 1035409
  },
  {
    date: "2021-12-21",
    open: 647.2,
    high: 652,
    low: 644.6,
    close: 650,
    adjusted_close: 646.1235,
    volume: 578284
  },
  {
    date: "2021-12-22",
    open: 649.6,
    high: 652.4,
    low: 646.8,
    close: 651.8,
    adjusted_close: 647.9127,
    volume: 689151
  },
  {
    date: "2021-12-23",
    open: 652,
    high: 656.4,
    low: 652,
    close: 656.2,
    adjusted_close: 652.2865,
    volume: 457957
  },
  {
    date: "2021-12-24",
    open: 655.8,
    high: 658.316,
    low: 655.4,
    close: 655.4,
    adjusted_close: 651.4913,
    volume: 189684
  },
  {
    date: "2021-12-29",
    open: 658.6,
    high: 665.267,
    low: 658.6,
    close: 663.6,
    adjusted_close: 659.6424,
    volume: 1364321
  },
  {
    date: "2021-12-30",
    open: 662.6,
    high: 666.1245,
    low: 658.4,
    close: 660.6,
    adjusted_close: 656.6603,
    volume: 490170
  },
  {
    date: "2022-01-04",
    open: 664,
    high: 684,
    low: 664,
    close: 684,
    adjusted_close: 679.9207,
    volume: 1936119
  },
  {
    date: "2022-01-05",
    open: 683.8,
    high: 689.4,
    low: 677.4,
    close: 677.4,
    adjusted_close: 673.3601,
    volume: 1206759
  },
  {
    date: "2022-01-06",
    open: 673.4,
    high: 676.4,
    low: 667.6,
    close: 676,
    adjusted_close: 671.9685,
    volume: 2523704
  },
  {
    date: "2022-01-07",
    open: 676.8,
    high: 685.6,
    low: 670.6,
    close: 681.2,
    adjusted_close: 677.1374,
    volume: 1917152
  },
  {
    date: "2022-01-10",
    open: 698.6,
    high: 706.2,
    low: 690.8,
    close: 695.4,
    adjusted_close: 691.2527,
    volume: 3805753
  },
  {
    date: "2022-01-11",
    open: 701.8,
    high: 703.2,
    low: 693.6,
    close: 695.4,
    adjusted_close: 691.2527,
    volume: 2309699
  },
  {
    date: "2022-01-12",
    open: 699.6,
    high: 708,
    low: 694.6,
    close: 704.6,
    adjusted_close: 700.3978,
    volume: 1912627
  },
  {
    date: "2022-01-13",
    open: 703.4,
    high: 720.6,
    low: 702.2,
    close: 719,
    adjusted_close: 714.7119,
    volume: 2296795
  },
  {
    date: "2022-01-14",
    open: 714.6,
    high: 723.8,
    low: 713.4,
    close: 718.4,
    adjusted_close: 714.1155,
    volume: 1794009
  },
  {
    date: "2022-01-17",
    open: 730,
    high: 733.4,
    low: 717.4,
    close: 718.8,
    adjusted_close: 714.5132,
    volume: 1405226
  },
  {
    date: "2022-01-18",
    open: 717.4,
    high: 736.2,
    low: 715,
    close: 730,
    adjusted_close: 725.6464,
    volume: 1880232
  },
  {
    date: "2022-01-19",
    open: 727.6,
    high: 734.6,
    low: 726.4,
    close: 731.4,
    adjusted_close: 727.038,
    volume: 2113752
  },
  {
    date: "2022-01-20",
    open: 732.2,
    high: 738.8,
    low: 728,
    close: 728.8,
    adjusted_close: 724.4536,
    volume: 1700723
  },
  {
    date: "2022-01-21",
    open: 721.8,
    high: 730.2,
    low: 721.4,
    close: 730.2,
    adjusted_close: 725.8452,
    volume: 3659479
  },
  {
    date: "2022-01-24",
    open: 728.4,
    high: 733.8,
    low: 711.2,
    close: 711.2,
    adjusted_close: 706.9585,
    volume: 2730855
  },
  {
    date: "2022-01-25",
    open: 717.4,
    high: 718.4,
    low: 705.8,
    close: 715.2,
    adjusted_close: 710.9346,
    volume: 1596298
  },
  {
    date: "2022-01-26",
    open: 719,
    high: 726.6,
    low: 713.7272,
    close: 714.6,
    adjusted_close: 710.3382,
    volume: 1335944
  },
  {
    date: "2022-01-27",
    open: 716.8,
    high: 735.6,
    low: 714.7562,
    close: 732,
    adjusted_close: 727.6344,
    volume: 1266325
  },
  {
    date: "2022-01-28",
    open: 728,
    high: 730.924,
    low: 720.4,
    close: 727.2,
    adjusted_close: 722.8631,
    volume: 2100861
  },
  {
    date: "2022-01-31",
    open: 722.4,
    high: 730.2,
    low: 706.4,
    close: 706.4,
    adjusted_close: 702.1871,
    volume: 1818549
  },
  {
    date: "2022-02-01",
    open: 719,
    high: 719,
    low: 703.4,
    close: 705,
    adjusted_close: 700.7955,
    volume: 3472573
  },
  {
    date: "2022-02-02",
    open: 717.4,
    high: 731.2,
    low: 705.438,
    close: 731,
    adjusted_close: 726.6404,
    volume: 3523583
  },
  {
    date: "2022-02-03",
    open: 728,
    high: 739.4,
    low: 718.2,
    close: 723,
    adjusted_close: 718.6881,
    volume: 10106006
  },
  {
    date: "2022-02-04",
    open: 736,
    high: 736,
    low: 715,
    close: 716.4,
    adjusted_close: 712.1275,
    volume: 3643521
  },
  {
    date: "2022-02-07",
    open: 717.8,
    high: 727.4,
    low: 717.8,
    close: 723.8,
    adjusted_close: 719.4833,
    volume: 2323811
  },
  {
    date: "2022-02-08",
    open: 723.6,
    high: 727.2,
    low: 705.6,
    close: 714.8,
    adjusted_close: 710.537,
    volume: 3200622
  },
  {
    date: "2022-02-09",
    open: 706.8,
    high: 717,
    low: 698.6,
    close: 698.6,
    adjusted_close: 694.4336,
    volume: 5302414
  },
  {
    date: "2022-02-10",
    open: 700.4,
    high: 701.8,
    low: 687.4,
    close: 690.2,
    adjusted_close: 686.0837,
    volume: 3815992
  },
  {
    date: "2022-02-11",
    open: 750,
    high: 762.2,
    low: 730.2,
    close: 756,
    adjusted_close: 751.4913,
    volume: 4874779
  },
  {
    date: "2022-02-14",
    open: 748.6,
    high: 752.9028,
    low: 737.4,
    close: 744.4,
    adjusted_close: 739.9605,
    volume: 5495250
  },
  {
    date: "2022-02-15",
    open: 745,
    high: 756.8,
    low: 740.4,
    close: 755.6,
    adjusted_close: 751.0937,
    volume: 4491473
  },
  {
    date: "2022-02-16",
    open: 758,
    high: 771.2,
    low: 756.844,
    close: 769.2,
    adjusted_close: 764.6126,
    volume: 2247144
  },
  {
    date: "2022-02-17",
    open: 769,
    high: 770.2,
    low: 762.8,
    close: 765,
    adjusted_close: 760.4376,
    volume: 1607072
  },
  {
    date: "2022-02-18",
    open: 766,
    high: 773.6,
    low: 763.2,
    close: 764.4,
    adjusted_close: 759.8412,
    volume: 1465581
  },
  {
    date: "2022-02-21",
    open: 767.4,
    high: 768,
    low: 754.2,
    close: 756.2,
    adjusted_close: 751.6901,
    volume: 2628211
  },
  {
    date: "2022-02-22",
    open: 749,
    high: 763.8,
    low: 744.9264,
    close: 762.2,
    adjusted_close: 757.6543,
    volume: 1744873
  },
  {
    date: "2022-02-23",
    open: 760.8,
    high: 772.8,
    low: 755.4,
    close: 761.4,
    adjusted_close: 756.8591,
    volume: 3392556
  },
  {
    date: "2022-02-24",
    open: 746.4,
    high: 754.2,
    low: 729.4156,
    close: 730,
    adjusted_close: 725.6464,
    volume: 1918397
  },
  {
    date: "2022-02-25",
    open: 726.4,
    high: 755.6,
    low: 726.4,
    close: 751,
    adjusted_close: 746.5212,
    volume: 3071256
  },
  {
    date: "2022-02-28",
    open: 750.2,
    high: 753.2,
    low: 739.4426,
    close: 753.2,
    adjusted_close: 748.708,
    volume: 4650429
  },
  {
    date: "2022-03-01",
    open: 753,
    high: 760,
    low: 748.8,
    close: 750.8,
    adjusted_close: 746.3223,
    volume: 11004672
  },
  {
    date: "2022-03-02",
    open: 747,
    high: 755.8,
    low: 732.8612,
    close: 743.6,
    adjusted_close: 739.1652,
    volume: 2896833
  },
  {
    date: "2022-03-03",
    open: 740.4,
    high: 743.4,
    low: 719.6,
    close: 721,
    adjusted_close: 716.7001,
    volume: 1367305
  },
  {
    date: "2022-03-04",
    open: 719.6,
    high: 721.2,
    low: 688.6,
    close: 691,
    adjusted_close: 686.879,
    volume: 2187402
  },
  {
    date: "2022-03-07",
    open: 681,
    high: 686.6924,
    low: 658.102,
    close: 674,
    adjusted_close: 669.9803,
    volume: 2241119
  },
  {
    date: "2022-03-08",
    open: 667.8,
    high: 684.4,
    low: 667.6,
    close: 672,
    adjusted_close: 667.9923,
    volume: 1824778
  },
  {
    date: "2022-03-09",
    open: 684.4,
    high: 728.5348,
    low: 678.8,
    close: 702.2,
    adjusted_close: 698.0121,
    volume: 3972451
  },
  {
    date: "2022-03-10",
    open: 702.6,
    high: 704,
    low: 681.8,
    close: 689,
    adjusted_close: 684.8909,
    volume: 1335311
  },
  {
    date: "2022-03-11",
    open: 690.6,
    high: 700,
    low: 681.8,
    close: 687.6,
    adjusted_close: 683.4992,
    volume: 1884454
  },
  {
    date: "2022-03-14",
    open: 692.4,
    high: 704.6,
    low: 689.2,
    close: 704.4,
    adjusted_close: 700.1991,
    volume: 911542
  },
  {
    date: "2022-03-15",
    open: 702.4,
    high: 713.4,
    low: 698,
    close: 710,
    adjusted_close: 705.7656,
    volume: 767783
  },
  {
    date: "2022-03-16",
    open: 717.4,
    high: 727,
    low: 712.8,
    close: 723.2,
    adjusted_close: 718.8869,
    volume: 2076014
  },
  {
    date: "2022-03-17",
    open: 708.8,
    high: 728.7632,
    low: 708.8,
    close: 727.2,
    adjusted_close: 722.8631,
    volume: 1512672
  },
  {
    date: "2022-03-18",
    open: 729.6,
    high: 731,
    low: 717.6,
    close: 726.6,
    adjusted_close: 722.2667,
    volume: 3975433
  },
  {
    date: "2022-03-21",
    open: 722.8,
    high: 731.6,
    low: 722.8,
    close: 725,
    adjusted_close: 720.6762,
    volume: 1315627
  },
  {
    date: "2022-03-22",
    open: 725.4,
    high: 734,
    low: 714.8,
    close: 715.6,
    adjusted_close: 711.3323,
    volume: 1993038
  },
  {
    date: "2022-03-23",
    open: 711.8,
    high: 719.6,
    low: 711.8,
    close: 715,
    adjusted_close: 710.7359,
    volume: 741437
  },
  {
    date: "2022-03-24",
    open: 715.4,
    high: 717.4,
    low: 706.2,
    close: 710,
    adjusted_close: 705.7656,
    volume: 663583
  },
  {
    date: "2022-03-25",
    open: 710,
    high: 721.6,
    low: 707.6,
    close: 718,
    adjusted_close: 713.718,
    volume: 839615
  },
  {
    date: "2022-03-28",
    open: 717.2,
    high: 726,
    low: 716.8,
    close: 721,
    adjusted_close: 716.7001,
    volume: 1026862
  },
  {
    date: "2022-03-29",
    open: 736.2,
    high: 736.2,
    low: 719,
    close: 722,
    adjusted_close: 717.6941,
    volume: 955741
  },
  {
    date: "2022-03-30",
    open: 714.2,
    high: 724.6,
    low: 714.2,
    close: 719.4,
    adjusted_close: 715.1096,
    volume: 1059303
  },
  {
    date: "2022-03-31",
    open: 725,
    high: 746,
    low: 724.6,
    close: 732.2,
    adjusted_close: 727.8332,
    volume: 1788058
  },
  {
    date: "2022-04-01",
    open: 732.2,
    high: 735.4,
    low: 726.8467,
    close: 729.8,
    adjusted_close: 725.4475,
    volume: 1709327
  },
  {
    date: "2022-04-04",
    open: 739,
    high: 741.8,
    low: 730.2,
    close: 737.8,
    adjusted_close: 733.3999,
    volume: 3452601
  },
  {
    date: "2022-04-05",
    open: 738,
    high: 752.6,
    low: 733.4305,
    close: 752.6,
    adjusted_close: 748.1116,
    volume: 1744984
  },
  {
    date: "2022-04-06",
    open: 750.8,
    high: 760,
    low: 744.6,
    close: 748.6,
    adjusted_close: 744.1355,
    volume: 2563074
  },
  {
    date: "2022-04-07",
    open: 752.4,
    high: 763,
    low: 743.298,
    close: 763,
    adjusted_close: 758.4496,
    volume: 2499128
  },
  {
    date: "2022-04-08",
    open: 765,
    high: 774.2,
    low: 760.8,
    close: 774.2,
    adjusted_close: 769.5827,
    volume: 1336614
  },
  {
    date: "2022-04-11",
    open: 772,
    high: 776.6,
    low: 765.8,
    close: 776.6,
    adjusted_close: 771.9684,
    volume: 1550855
  },
  {
    date: "2022-04-12",
    open: 777,
    high: 777,
    low: 760.6,
    close: 767.6,
    adjusted_close: 763.0221,
    volume: 1150682
  },
  {
    date: "2022-04-13",
    open: 765.6,
    high: 768.952,
    low: 759.4,
    close: 763.4,
    adjusted_close: 758.8472,
    volume: 976557
  },
  {
    date: "2022-04-14",
    open: 775.2,
    high: 775.2,
    low: 761.623,
    close: 771.6,
    adjusted_close: 766.9983,
    volume: 1039615
  },
  {
    date: "2022-04-19",
    open: 770,
    high: 771.4,
    low: 742.4,
    close: 762.6,
    adjusted_close: 758.052,
    volume: 1906473
  },
  {
    date: "2022-04-20",
    open: 765.2,
    high: 771.6,
    low: 758,
    close: 764.8,
    adjusted_close: 760.2389,
    volume: 2250038
  },
  {
    date: "2022-04-21",
    open: 764.6,
    high: 772.2,
    low: 763,
    close: 771.2,
    adjusted_close: 766.6006,
    volume: 1168087
  },
  {
    date: "2022-04-22",
    open: 763.6,
    high: 777.528,
    low: 762.4,
    close: 768,
    adjusted_close: 763.4197,
    volume: 915340
  },
  {
    date: "2022-04-25",
    open: 760.8,
    high: 773,
    low: 756.6,
    close: 771.6,
    adjusted_close: 766.9983,
    volume: 3258086
  },
  {
    date: "2022-04-26",
    open: 776.4,
    high: 780.4,
    low: 772.7743,
    close: 775,
    adjusted_close: 770.378,
    volume: 1629279
  },
  {
    date: "2022-04-27",
    open: 775.6,
    high: 776.6,
    low: 761.8,
    close: 774.2,
    adjusted_close: 769.5827,
    volume: 1135396
  },
  {
    date: "2022-04-28",
    open: 779,
    high: 782.2,
    low: 773,
    close: 773,
    adjusted_close: 768.3899,
    volume: 1702859
  },
  {
    date: "2022-04-29",
    open: 760,
    high: 779.9716,
    low: 757,
    close: 777,
    adjusted_close: 772.3661,
    volume: 1530888
  },
  {
    date: "2022-05-03",
    open: 791.9,
    high: 807.5,
    low: 778.0395,
    close: 800,
    adjusted_close: 786.8684,
    volume: 1480547
  },
  {
    date: "2022-05-04",
    open: 800.1,
    high: 814.9,
    low: 776.6,
    close: 781.9,
    adjusted_close: 769.0655,
    volume: 1494887
  },
  {
    date: "2022-05-05",
    open: 795.1,
    high: 795.4,
    low: 782.1,
    close: 785.8,
    adjusted_close: 772.9015,
    volume: 1408258
  },
  {
    date: "2022-05-06",
    open: 781.5,
    high: 783,
    low: 761.35,
    close: 770,
    adjusted_close: 757.3609,
    volume: 1968020
  },
  {
    date: "2022-05-09",
    open: 770,
    high: 770.805,
    low: 759,
    close: 761.5,
    adjusted_close: 749.0004,
    volume: 1394520
  },
  {
    date: "2022-05-10",
    open: 766.5,
    high: 775.5,
    low: 763,
    close: 765,
    adjusted_close: 752.4429,
    volume: 908383
  },
  {
    date: "2022-05-11",
    open: 767,
    high: 771,
    low: 759.5,
    close: 769,
    adjusted_close: 756.3773,
    volume: 1201539
  },
  {
    date: "2022-05-12",
    open: 756.5,
    high: 764.37,
    low: 755,
    close: 759.5,
    adjusted_close: 747.0332,
    volume: 925377
  },
  {
    date: "2022-05-13",
    open: 766,
    high: 776,
    low: 765.24,
    close: 776,
    adjusted_close: 763.2624,
    volume: 649144
  },
  {
    date: "2022-05-16",
    open: 771.5,
    high: 782.5,
    low: 766,
    close: 779,
    adjusted_close: 766.2131,
    volume: 1124823
  },
  {
    date: "2022-05-17",
    open: 783,
    high: 786.5,
    low: 775.5,
    close: 784,
    adjusted_close: 771.1311,
    volume: 1211726
  },
  {
    date: "2022-05-18",
    open: 787.5,
    high: 791,
    low: 761,
    close: 761,
    adjusted_close: 748.5086,
    volume: 1568234
  },
  {
    date: "2022-05-19",
    open: 753,
    high: 759.9205,
    low: 730,
    close: 740,
    adjusted_close: 727.8533,
    volume: 776353
  },
  {
    date: "2022-05-20",
    open: 739,
    high: 757.4122,
    low: 738.5,
    close: 754.5,
    adjusted_close: 742.1153,
    volume: 940299
  },
  {
    date: "2022-05-23",
    open: 760,
    high: 762.5,
    low: 753.5,
    close: 761.5,
    adjusted_close: 749.0004,
    volume: 647146
  },
  {
    date: "2022-05-24",
    open: 762,
    high: 765,
    low: 751.3515,
    close: 760.5,
    adjusted_close: 748.0168,
    volume: 2767814
  },
  {
    date: "2022-05-25",
    open: 768,
    high: 771.5,
    low: 763.6515,
    close: 771.5,
    adjusted_close: 758.8362,
    volume: 858346
  },
  {
    date: "2022-05-26",
    open: 767.5,
    high: 772.478,
    low: 763,
    close: 764,
    adjusted_close: 751.4593,
    volume: 774495
  },
  {
    date: "2022-05-27",
    open: 762,
    high: 765.5,
    low: 750.121,
    close: 755,
    adjusted_close: 742.6071,
    volume: 633010
  },
  {
    date: "2022-05-30",
    open: 759.5,
    high: 767,
    low: 750.5652,
    close: 753,
    adjusted_close: 740.6399,
    volume: 1451377
  },
  {
    date: "2022-05-31",
    open: 752.5,
    high: 752.5,
    low: 741,
    close: 744.5,
    adjusted_close: 732.2794,
    volume: 1800265
  },
  {
    date: "2022-06-01",
    open: 754.5,
    high: 756.5,
    low: 746.5,
    close: 752,
    adjusted_close: 739.6563,
    volume: 1083180
  },
  {
    date: "2022-06-06",
    open: 755.5,
    high: 768.5,
    low: 753,
    close: 753,
    adjusted_close: 740.6399,
    volume: 818938
  },
  {
    date: "2022-06-07",
    open: 752.5,
    high: 760,
    low: 751,
    close: 757,
    adjusted_close: 744.5742,
    volume: 1245642
  },
  {
    date: "2022-06-08",
    open: 758.5,
    high: 759.5,
    low: 740,
    close: 745,
    adjusted_close: 732.7712,
    volume: 1443382
  },
  {
    date: "2022-06-09",
    open: 745,
    high: 778.2592,
    low: 745,
    close: 762,
    adjusted_close: 749.4922,
    volume: 1878422
  },
  {
    date: "2022-06-10",
    open: 756,
    high: 762,
    low: 732.5,
    close: 743.5,
    adjusted_close: 731.2958,
    volume: 2014708
  },
  {
    date: "2022-06-13",
    open: 737.5,
    high: 739.5,
    low: 721.7205,
    close: 738.5,
    adjusted_close: 726.3779,
    volume: 1382300
  },
  {
    date: "2022-06-14",
    open: 745.5,
    high: 749,
    low: 729.4048,
    close: 733.5,
    adjusted_close: 721.46,
    volume: 1740660
  },
  {
    date: "2022-06-15",
    open: 740.4,
    high: 765,
    low: 737.2,
    close: 760,
    adjusted_close: 747.525,
    volume: 6305407
  },
  {
    date: "2022-06-16",
    open: 759,
    high: 759.8,
    low: 741.2,
    close: 744,
    adjusted_close: 731.7876,
    volume: 2058563
  },
  {
    date: "2022-06-17",
    open: 747,
    high: 769,
    low: 744.4,
    close: 763.6,
    adjusted_close: 751.0659,
    volume: 5793375
  },
  {
    date: "2022-06-20",
    open: 775,
    high: 776.8,
    low: 755.8,
    close: 773.8,
    adjusted_close: 761.0985,
    volume: 4001156
  },
  {
    date: "2022-06-21",
    open: 755.2,
    high: 781.6,
    low: 755.2,
    close: 768.6,
    adjusted_close: 755.9838,
    volume: 5250710
  },
  {
    date: "2022-06-22",
    open: 761.4,
    high: 766.4,
    low: 749,
    close: 753.8,
    adjusted_close: 741.4268,
    volume: 3505735
  },
  {
    date: "2022-06-23",
    open: 750.2,
    high: 755.6,
    low: 734.2,
    close: 749,
    adjusted_close: 736.7056,
    volume: 1117292
  },
  {
    date: "2022-06-24",
    open: 751,
    high: 767.4,
    low: 747.6,
    close: 765.4,
    adjusted_close: 752.8364,
    volume: 940942
  },
  {
    date: "2022-06-27",
    open: 766,
    high: 780.6,
    low: 764.2,
    close: 778.6,
    adjusted_close: 765.8197,
    volume: 861416
  },
  {
    date: "2022-06-28",
    open: 772.4,
    high: 780,
    low: 771.9923,
    close: 772,
    adjusted_close: 759.328,
    volume: 1069740
  },
  {
    date: "2022-06-29",
    open: 765.4,
    high: 779.8,
    low: 760.8,
    close: 779.8,
    adjusted_close: 767,
    volume: 1193344
  },
  {
    date: "2022-06-30",
    open: 759.4,
    high: 759.8,
    low: 747.9341,
    close: 749.4,
    adjusted_close: 749.4,
    volume: 3005793
  },
  {
    date: "2022-07-01",
    open: 743,
    high: 765.8,
    low: 740.8,
    close: 760.2,
    adjusted_close: 760.2,
    volume: 1068956
  },
  {
    date: "2022-07-04",
    open: 768.6,
    high: 776,
    low: 761.4,
    close: 772,
    adjusted_close: 772,
    volume: 1795753
  },
  {
    date: "2022-07-05",
    open: 780,
    high: 781.8,
    low: 767,
    close: 775,
    adjusted_close: 775,
    volume: 2119987
  },
  {
    date: "2022-07-06",
    open: 779.8,
    high: 785.8,
    low: 775.8,
    close: 776.4,
    adjusted_close: 776.4,
    volume: 1978046
  },
  {
    date: "2022-07-07",
    open: 782.6,
    high: 782.6,
    low: 773.4,
    close: 773.8,
    adjusted_close: 773.8,
    volume: 1556252
  },
  {
    date: "2022-07-08",
    open: 773.4,
    high: 775.4,
    low: 768.2,
    close: 773,
    adjusted_close: 773,
    volume: 773853
  },
  {
    date: "2022-07-11",
    open: 770,
    high: 778,
    low: 768,
    close: 778,
    adjusted_close: 778,
    volume: 669428
  },
  {
    date: "2022-07-12",
    open: 775,
    high: 781.6,
    low: 769.4,
    close: 778.6,
    adjusted_close: 778.6,
    volume: 1251637
  },
  {
    date: "2022-07-13",
    open: 777.6,
    high: 780.6,
    low: 771.8,
    close: 772.8,
    adjusted_close: 772.8,
    volume: 801698
  },
  {
    date: "2022-07-14",
    open: 777.8,
    high: 777.8,
    low: 768.4963,
    close: 772.2,
    adjusted_close: 772.2,
    volume: 993485
  },
  {
    date: "2022-07-15",
    open: 774.4,
    high: 780.6,
    low: 769.4,
    close: 778.8,
    adjusted_close: 778.8,
    volume: 851099
  },
  {
    date: "2022-07-18",
    open: 781.4,
    high: 785.4,
    low: 777,
    close: 778.6,
    adjusted_close: 778.6,
    volume: 1224977
  },
  {
    date: "2022-07-19",
    open: 769.8,
    high: 789.4,
    low: 764.8,
    close: 785.2,
    adjusted_close: 785.2,
    volume: 898711
  },
  {
    date: "2022-07-20",
    open: 789.8,
    high: 791.762,
    low: 784.8,
    close: 785.4,
    adjusted_close: 785.4,
    volume: 834365
  },
  {
    date: "2022-07-21",
    open: 785,
    high: 792.6,
    low: 780.8,
    close: 790,
    adjusted_close: 790,
    volume: 609833
  },
  {
    date: "2022-07-22",
    open: 778.6,
    high: 800.2,
    low: 778.6,
    close: 794,
    adjusted_close: 794,
    volume: 9438921
  },
  {
    date: "2022-07-25",
    open: 776.6,
    high: 800,
    low: 776.6,
    close: 798,
    adjusted_close: 798,
    volume: 1992186
  },
  {
    date: "2022-07-26",
    open: 776.4,
    high: 804.6,
    low: 776.4,
    close: 795.4,
    adjusted_close: 795.4,
    volume: 1079339
  },
  {
    date: "2022-07-27",
    open: 800,
    high: 804.8,
    low: 795,
    close: 797,
    adjusted_close: 797,
    volume: 854709
  },
  {
    date: "2022-07-28",
    open: 778.8,
    high: 799.2,
    low: 778.8,
    close: 796,
    adjusted_close: 796,
    volume: 755966
  },
  {
    date: "2022-07-29",
    open: 799.4,
    high: 802.8,
    low: 795.2,
    close: 802.8,
    adjusted_close: 802.8,
    volume: 1438913
  },
  {
    date: "2022-08-01",
    open: 780,
    high: 802.6,
    low: 780,
    close: 801,
    adjusted_close: 801,
    volume: 699360
  },
  {
    date: "2022-08-02",
    open: 792.6,
    high: 803.4,
    low: 792.6,
    close: 800.4,
    adjusted_close: 800.4,
    volume: 1036229
  },
  {
    date: "2022-08-03",
    open: 796.8,
    high: 805.6,
    low: 796,
    close: 805.6,
    adjusted_close: 805.6,
    volume: 1590929
  },
  {
    date: "2022-08-04",
    open: 790.2,
    high: 809.4,
    low: 790.2,
    close: 803.8,
    adjusted_close: 803.8,
    volume: 748312
  },
  {
    date: "2022-08-05",
    open: 798,
    high: 808.2,
    low: 796.8,
    close: 798.2,
    adjusted_close: 798.2,
    volume: 637122
  },
  {
    date: "2022-08-08",
    open: 799.8,
    high: 802.696,
    low: 794.4,
    close: 799,
    adjusted_close: 799,
    volume: 486239
  },
  {
    date: "2022-08-09",
    open: 789.8,
    high: 801.2,
    low: 789.8,
    close: 793.6,
    adjusted_close: 793.6,
    volume: 477697
  },
  {
    date: "2022-08-10",
    open: 795,
    high: 802,
    low: 791.4,
    close: 802,
    adjusted_close: 802,
    volume: 607878
  },
  {
    date: "2022-08-11",
    open: 786.4,
    high: 802.4,
    low: 786.4,
    close: 797,
    adjusted_close: 797,
    volume: 721421
  },
  {
    date: "2022-08-12",
    open: 791.4,
    high: 801,
    low: 788,
    close: 795.8,
    adjusted_close: 795.8,
    volume: 464153
  },
  {
    date: "2022-08-15",
    open: 796,
    high: 802.8,
    low: 793.4,
    close: 797.6,
    adjusted_close: 797.6,
    volume: 352512
  },
  {
    date: "2022-08-16",
    open: 800,
    high: 803.4,
    low: 794.8,
    close: 800.8,
    adjusted_close: 800.8,
    volume: 1130074
  },
  {
    date: "2022-08-17",
    open: 792,
    high: 801.8,
    low: 791.4,
    close: 793.2,
    adjusted_close: 793.2,
    volume: 861409
  },
  {
    date: "2022-08-18",
    open: 790,
    high: 796.2,
    low: 783.792,
    close: 790.6,
    adjusted_close: 790.6,
    volume: 376278
  },
  {
    date: "2022-08-19",
    open: 784,
    high: 794.2,
    low: 772.8,
    close: 790.6,
    adjusted_close: 790.6,
    volume: 1153269
  },
  {
    date: "2022-08-22",
    open: 777.6,
    high: 787.8,
    low: 777.6,
    close: 779.6,
    adjusted_close: 779.6,
    volume: 516958
  },
  {
    date: "2022-08-23",
    open: 770.2,
    high: 778,
    low: 765,
    close: 773.4,
    adjusted_close: 773.4,
    volume: 810539
  },
  {
    date: "2022-08-24",
    open: 774,
    high: 782.4,
    low: 769.2,
    close: 781.2,
    adjusted_close: 781.2,
    volume: 940881
  },
  {
    date: "2022-08-25",
    open: 772.4,
    high: 785.4,
    low: 762.2,
    close: 779,
    adjusted_close: 779,
    volume: 493842
  },
  {
    date: "2022-08-26",
    open: 785,
    high: 785.6,
    low: 778.4,
    close: 781.4,
    adjusted_close: 781.4,
    volume: 1067153
  },
  {
    date: "2022-08-30",
    open: 762.8,
    high: 791.6,
    low: 762.8,
    close: 771.4,
    adjusted_close: 771.4,
    volume: 1254640
  },
  {
    date: "2022-08-31",
    open: 775,
    high: 775,
    low: 753.8315,
    close: 764.2,
    adjusted_close: 764.2,
    volume: 2305688
  },
  {
    date: "2022-09-01",
    open: 755,
    high: 763,
    low: 748.8,
    close: 752.2,
    adjusted_close: 752.2,
    volume: 1031901
  },
  {
    date: "2022-09-02",
    open: 746,
    high: 758,
    low: 746,
    close: 758,
    adjusted_close: 758,
    volume: 644806
  },
  {
    date: "2022-09-05",
    open: 746,
    high: 752.072,
    low: 732.8,
    close: 750,
    adjusted_close: 750,
    volume: 1100871
  },
  {
    date: "2022-09-06",
    open: 750,
    high: 758.752,
    low: 731.2,
    close: 753,
    adjusted_close: 753,
    volume: 1495458
  },
  {
    date: "2022-09-07",
    open: 745,
    high: 754.8,
    low: 743.2,
    close: 751,
    adjusted_close: 751,
    volume: 1190894
  },
  {
    date: "2022-09-08",
    open: 732.2,
    high: 756.2,
    low: 732.2,
    close: 748.2,
    adjusted_close: 748.2,
    volume: 1749898
  },
  {
    date: "2022-09-09",
    open: 755,
    high: 761.2,
    low: 751.2,
    close: 761.2,
    adjusted_close: 761.2,
    volume: 1054206
  },
  {
    date: "2022-09-12",
    open: 731,
    high: 739.6,
    low: 707,
    close: 735.8,
    adjusted_close: 735.8,
    volume: 3401066
  },
  {
    date: "2022-09-13",
    open: 724.2,
    high: 741.4,
    low: 718.8,
    close: 718.8,
    adjusted_close: 718.8,
    volume: 2234547
  },
  {
    date: "2022-09-14",
    open: 715,
    high: 719.6,
    low: 696.2,
    close: 696.2,
    adjusted_close: 696.2,
    volume: 1923982
  },
  {
    date: "2022-09-15",
    open: 713.2,
    high: 718.6,
    low: 706.2,
    close: 712.6,
    adjusted_close: 712.6,
    volume: 1826120
  },
  {
    date: "2022-09-16",
    open: 711.4,
    high: 724.4,
    low: 700.4,
    close: 701.6,
    adjusted_close: 701.6,
    volume: 2739676
  }
]

function App() {
  const labels = (stockData ?? []).map((el) => el.date);

  const dataChart = () => {
    return {
        labels,
        datasets: [
            {
                backgroundColor: 'rgba(53, 168 , 83, 0.1)', // Put the gradient here as a fill color
                borderColor: '#35a853',
                borderWidth: 2,
                label: 'Stock Tate & Lyle PLC',
                data: (stockData ?? []).map((el) => el.close),
                fill: 'start',
            },
        ],
    };
  };

  const chartRef = useRef(null);
  return (
    <div className="App">
      <div style={{width: '70%', height: '70%', margin: '0px auto', paddingTop: '200px'}}>
        <Line ref={chartRef} options={options} data={dataChart()} />
      </div>
    </div>
  );
}

export default App;
