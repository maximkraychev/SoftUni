package NestedLoopsExercise;

import java.util.Scanner;

public class EqualSumsEvenOddPosition {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int start = Integer.parseInt(scanner.nextLine());
        int end = Integer.parseInt(scanner.nextLine());

        for (int i = start; i <= end; i++) {
            String currentNumberAsString = i + "";
            int odd = 0;
            int even = 0;

            for (int j = 0; j < currentNumberAsString.length(); j++) {
                int number = Integer.parseInt(currentNumberAsString.charAt(j) + "");

                if ((j + 1) % 2 == 0) {
                    odd += number;
                } else {
                    even += number;
                }
            }

            if (odd == even) {
                System.out.print(i + " ");
            }
        }
    }
}
