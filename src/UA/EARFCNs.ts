import type { ArfcnDataItem, SimpleArfcnDataItem } from "../@types";
import { mapArfcnListToBand } from "../utils/mapArfcnListToBand";

const B1: SimpleArfcnDataItem[] = [
  {
    arfcn: 100,
    bandwidth: 20,
    operator: "lifecell",
    description: "B1 20 MHz",
  },
  {
    arfcn: 125,
    bandwidth: 15,
    operator: "lifecell",
    description: "B1 15 MHz (3G 5 MHz)",
  },
  {
    arfcn: 150,
    bandwidth: 10,
    operator: "lifecell",
    description: "B1 10 MHz (3G 10 MHz)",
  },
  {
    arfcn: 374,
    bandwidth: 15,
    operator: "Vodafone Ukraine",
    description: "B1 15 MHz",
  },
  {
    arfcn: 400,
    bandwidth: 10,
    operator: "Vodafone Ukraine",
    description: "Standard B1 10 MHz (3G 5 MHz)",
  },
  {
    arfcn: 524,
    bandwidth: 15,
    operator: "Kyivstar",
    description: "Standard B1 15 MHz",
  },
  {
    arfcn: 550,
    bandwidth: 10,
    operator: "Kyivstar",
    description: "Standard B1 10 MHz (3G 5 MHz)",
  },
];

const B3: SimpleArfcnDataItem[] = [
  {
    arfcn: 1275,
    bandwidth: 15,
    operator: "lifecell",
    description: "B3 15 MHz deployment",
  },
  {
    arfcn: 1300,
    bandwidth: 10,
    operator: "lifecell",
    description: "B3 10 MHz deployment",
  },
  {
    arfcn: 1374,
    bandwidth: 5,
    operator: "Kyivstar",
    description: "B3 5 MHz deployment",
  },
  {
    arfcn: 1500,
    bandwidth: 20,
    operator: "Kyivstar",
    description: "Standard B3 deployment",
  },
  {
    arfcn: 1700,
    bandwidth: 20,
    operator: "Vodafone Ukraine",
    description: "Standard B3 deployment, 2G/4G DSS",
  },
  {
    arfcn: 1700,
    bandwidth: 15,
    operator: "Vodafone Ukraine",
    description: "B3 15 MHz deployment",
  },
  {
    arfcn: 1850,
    bandwidth: 10,
    operator: "Kyivstar",
    description: "B3 10 MHz deployment",
  },
];

const B7: SimpleArfcnDataItem[] = [
  {
    arfcn: 2900,
    bandwidth: 10,
    operator: "Vodafone Ukraine",
    description: "Standard B7 deployment",
  },
  {
    arfcn: 2950,
    bandwidth: 20,
    operator: "Vodafone Ukraine",
    description:
      "B7 20 MHz deployment in some areas since the beginning of the war",
  },
  {
    arfcn: 3000,
    bandwidth: 20,
    operator: "Kyivstar",
    description:
      "B7 20 MHz deployment in some areas since the beginning of the war",
  },
  {
    arfcn: 3025,
    bandwidth: 15,
    operator: "Kyivstar",
    description: "Standard B7 deployment",
  },
  {
    arfcn: 3150,
    bandwidth: 10,
    operator: "lifecell",
    description: "Standard B7 deployment - carrier 1",
  },
  {
    arfcn: 3425,
    bandwidth: 5,
    operator: "lifecell",
    description: "Standard B7 deployment - carrier 2",
  },
];

const B8: SimpleArfcnDataItem[] = [
  {
    arfcn: 3575,
    bandwidth: 5,
    operator: "Kyivstar",
    description: "Standard 5 MHz B8 deployment",
  },
  {
    arfcn: 3615,
    bandwidth: 3,
    operator: "lifecell",
    description: "Standard 3 MHz B8 deployment",
  },
  {
    arfcn: 3625,
    bandwidth: 5,
    operator: "lifecell",
    description: "Standard 5 MHz B8 deployment",
  },
  {
    arfcn: 3676,
    bandwidth: [3, 5],
    operator: "Vodafone Ukraine",
    description: "Standard B8 deployment",
  },
];

const B38: SimpleArfcnDataItem[] = [
  {
    arfcn: 37900,
    bandwidth: 20,
    operator: "Vodafone Ukraine",
    description: "B38 20 MHz deployment - contiguous carrier 1",
  },
  {
    arfcn: 38098,
    bandwidth: 20,
    operator: "Vodafone Ukraine",
    description: "B38 20 MHz deployment - contiguous carrier 2",
  },
];

const B40: SimpleArfcnDataItem[] = [
  {
    arfcn: 39300,
    bandwidth: 20,
    operator: "Kyivstar",
    description: "Standard B40 deployment - contiguous carrier 1",
  },
  {
    arfcn: 39498,
    bandwidth: 20,
    operator: "Kyivstar",
    description: "Standard B40 deployment - contiguous carrier 1",
  },
];

const EARFCNs: ArfcnDataItem[] = [
  ...mapArfcnListToBand(1, B1),
  ...mapArfcnListToBand(3, B3),
  ...mapArfcnListToBand(7, B7),
  ...mapArfcnListToBand(8, B8),
  ...mapArfcnListToBand(38, B38),
  ...mapArfcnListToBand(40, B40),
];

export default EARFCNs;
