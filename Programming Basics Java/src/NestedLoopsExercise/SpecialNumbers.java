package NestedLoopsExercise;

import java.util.Scanner;

public class SpecialNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int N = Integer.parseInt(scanner.nextLine());

        for (int i = 1111; i <= 9999; i++) {
            String currentNumberAsString = String.valueOf(i);
            boolean isSpecialNumber = true;

            for (int j = 0; j < 4; j++) {
                int number = Integer.parseInt(currentNumberAsString.charAt(j) + "");

                if (number == 0 || N % number != 0) {
                    isSpecialNumber = false;
                    break;
                }

            }

            if (isSpecialNumber) {
                System.out.print(i + " ");
            }
        }
    }
}
