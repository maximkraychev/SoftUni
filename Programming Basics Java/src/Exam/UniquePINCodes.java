package Exam;

import java.util.Scanner;

public class UniquePINCodes {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int upperBoundaryFirstDigit = Integer.parseInt(scanner.nextLine());
        int upperBoundarySecondDigit = Integer.parseInt(scanner.nextLine());
        int upperBoundaryThirdDigit = Integer.parseInt(scanner.nextLine());

        for (int i = 2; i <= upperBoundaryFirstDigit; i++) {

            if (i % 2 != 0) {
                continue;
            }

            for (int j = 2; j <= upperBoundarySecondDigit; j++) {
                if (j == 2 || j == 3 || j == 5 || j == 7) {

                    for (int k = 2; k <= upperBoundaryThirdDigit; k++) {
                        if (k % 2 != 0) {
                            continue;
                        }

                        System.out.printf("%d %d %d\n", i, j, k);
                    }

                }
            }
        }
    }
}
