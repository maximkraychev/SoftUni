package NestedLoopsExercise;

import java.util.Scanner;

public class CinemaTickets {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String movieName = scanner.nextLine();
        int totalStudentTickets = 0;
        int talalStandardTickets = 0;
        int totalKidsTickets = 0;

        while (!movieName.equals("Finish")) {
            int emptySeats = Integer.parseInt(scanner.nextLine());
            double takenSeats = 0;

            String ticket = scanner.nextLine();

            while (!ticket.equals("End")) {
                switch (ticket) {
                    case "student":
                        totalStudentTickets++;
                        break;
                    case "standard":
                        talalStandardTickets++;
                        break;
                    case "kid":
                        totalKidsTickets++;
                        break;
                }

                takenSeats++;

                if (emptySeats == takenSeats) {
                    break;
                }

                ticket = scanner.nextLine();
            }

            System.out.printf("%s - %.2f%% full.\n", movieName, (takenSeats / emptySeats) * 100);

            movieName = scanner.nextLine();
        }

        int totalSoldTickets = totalStudentTickets + talalStandardTickets + totalKidsTickets;

        System.out.printf("Total tickets: %d\n", totalSoldTickets);
        System.out.printf("%.2f%% student tickets.\n", ((double) totalStudentTickets / totalSoldTickets) * 100);
        System.out.printf("%.2f%% standard tickets.\n", ((double) talalStandardTickets / totalSoldTickets) * 100);
        System.out.printf("%.2f%% kids tickets.\n", ((double) totalKidsTickets / totalSoldTickets) * 100);
    }
}
