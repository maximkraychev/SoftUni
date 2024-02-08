package FirstStepsInCodingExercise;

import java.util.Scanner;

public class DepositCalculator {
    public static void main(String[] arg) {
        Scanner scan = new Scanner(System.in);
        double sum = Double.parseDouble(scan.nextLine());
        int depositMonths = Integer.parseInt(scan.nextLine());
        double annualInterestRate = Double.parseDouble(scan.nextLine());

        double totalInterest = sum * (annualInterestRate / 100);
        double interestPerMonth = totalInterest / 12;

        System.out.println(sum + depositMonths * interestPerMonth);
    }
}
