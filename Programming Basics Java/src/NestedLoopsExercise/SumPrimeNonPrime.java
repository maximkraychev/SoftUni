package NestedLoopsExercise;

import java.util.Scanner;

public class SumPrimeNonPrime {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        int sumOfPrimeNumbers = 0;
        int sumOfNonPrimeNumbers = 0;

        while (!input.equals("stop")) {
            int inputAsNumber = Integer.parseInt(input);

            if (inputAsNumber < 0) {
                System.out.println("Number is negative.");
                input = scanner.nextLine();
                continue;
            }

            boolean isPrime = true;

            for (int i = 2; i <= inputAsNumber / 2; i++) {
                if (inputAsNumber % i == 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                sumOfPrimeNumbers += inputAsNumber;
            } else {
                sumOfNonPrimeNumbers += inputAsNumber;
            }

            input = scanner.nextLine();
        }

        System.out.printf("Sum of all prime numbers is: %d\n", sumOfPrimeNumbers);
        System.out.printf("Sum of all non prime numbers is: %d", sumOfNonPrimeNumbers);
    }
}
