package NestedLoopsExercise;

import java.util.Scanner;

public class NumberPyramid {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int number = Integer.parseInt(scanner.nextLine());
        int current = 1;
        boolean isBigger = false;

        for (int rows = 1; rows <= number; rows++) {

            for (int cols = 1; cols <= rows; cols++) {
                if (current > number) {
                    isBigger = true;
                    break;
                }

                System.out.print(current + " ");
                current++;
            }

            System.out.println();

            if (isBigger) {
                break;
            }
        }
    }
}
