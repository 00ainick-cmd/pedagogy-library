---
id: lesson-map-history-incidents
title: Lesson Map, History and Incidents
section: 08-lesson-craft/history-incidents
applies_to: every lesson in frontend/public/aero/hangar/classrooms.json (51 lessons in 14 rooms, read 2026-10-01)
last_reviewed: 2026-10-01
status: research map for lesson builders; every candidate still needs Nick's choice
---

# Lesson Map: History and Incidents

For every lesson in the hangar's `classrooms.json`, this map lists candidate history (people or milestones) and real
accidents or incidents tied to the lesson's learning, each with its official report, the technician lesson and image
candidates with their licence.

How this map was built (2026-10-01):
- The lesson list is `aero-caet-source/frontend/public/aero/hangar/classrooms.json` as read
  on 2026-10-01. It held 51 lessons in 14 rooms. (An earlier read the same morning showed 45; the six new lessons, Battery
  Safety, Hand Tools and Precision Measuring, Series-Parallel Circuits, The Aircraft DC Power System, Electrical
  Troubleshooting and Antennas and Coax, were added to the rooms during the day. They are all covered below.)
- History ideas already in the Blueprint plans (`curriculum/blueprint/plans/*.json`) are listed first and marked
  "Blueprint". History pages already built in `tools/curriculum/revamp/examples/` are marked "built".
- Report numbers and URLs were checked on 2026-10-01 by downloading the report or its official page and reading the
  title page and the cited sections. Page numbers are the PDF page unless the entry says "report page".
- Image licences were read from the Wikimedia Commons file pages (licence templates, through the Commons API) on
  2026-10-01. Check the file page again before download (see `image-licensing.md`).
- **UNVERIFIED** marks anything not confirmed in the official source. Do not put an UNVERIFIED fact on a lesson page.
  Check it or cut it.

Kinds of incident (from `incident-page-pattern.md`): **A** a maintenance action or a missed one is in the report's
findings; **B** the system the lesson teaches failed or misled, and the report explains how; **C** a milestone that
changed a rule or system the student works on.

Access notes for whoever checks next: faa.gov, loc.gov and some agency sites return HTTP 403 to automated fetch tools
but open in a browser (and to `curl` with a browser user agent). atsb.gov.au did not respond on 2026-10-01. The old
`bea.aero/docspa/...` PDF links now return 404; the working form is `bea.aero/fileadmin/documents/docspa/...` or
`bea.aero/uploads/tx_elydbrapports/...`.

---

## Part 1. Strongest incident-to-lesson matches

Ranked by how directly the official report's findings teach the lesson's skill to an entry-level avionics technician.

| Rank | Incident | Lesson | Why it is strong |
|---|---|---|---|
| 1 | Aeroperú Flight 603, 1996 | Blocked Ports and Altimeter Setting | Masking tape over the three left static ports, put on for polishing, was never removed and was missed at every release step. The lesson's own hook, from the real report. |
| 2 | Air France Flight 4590 (Concorde), 2000 | FOD and Tool Control | The strip that cut the tire was a part installed on another airplane "not in accordance with the manufacturer's specifications" (37 holes drilled where 12 are needed; a titanium piece and a mastic "not normally used"). Built already. |
| 3 | Airbus A320 sidestick wiring, Frankfurt, 2001 | Harness Fabrication; Ring-out and Wiring Troubleshooting | Two pairs of wires were connected inverted during a connector repair; the continuity check the maintenance manual required was cancelled orally, and the functional check was done from the other sidestick. |
| 4 | British Airways Flight 5390, 1990 | Repair Stations, STCs, and the 8130-3 (parts); Hand Tools and Precision Measuring | 84 of 90 bolts were 0.026 inch undersize, picked by matching the old bolt by eye instead of the parts catalog. Built in Human Factors. |
| 5 | Birgenair Flight 301, 1996 | Pitot-Static Systems; The Certification Checks | The report lists "not installing the pitot system covers while the aircraft was on the ground" and "the failure to perform tests for the return to service of the pitot/static system after a lengthy time on the ground". |
| 6 | Swissair Flight 111, 1998 | Routing, Coax, and Databus Wiring; Repair Stations, STCs, and the 8130-3; The Aircraft DC Power System | Fire most likely started from a wire arcing event; an STC-installed entertainment cable showed arc damage; the system was powered from a bus the crew's smoke checklist did not shed; circuit breakers cannot stop every arc. |
| 7 | Eastern Air Lines Flight 401, 1972 | Lighting Systems | No airplane malfunction "except that both bulbs in the nose landing gear position indicating system were burned out". |
| 8 | XL Airways Germany Flight 888T, 2008 | Blocked Ports and Altimeter Setting; Pitot-Static Systems | Angle of attack sensors were rinsed without the protection the cleaning procedure requires; water froze inside two of them in the climb. |
| 9 | TWA Flight 800, 1996 | Routing, Coax, and Databus Wiring; Wire, Tools, and Hardware Selection | Most likely ignition: a short circuit outside the center wing tank put excessive voltage onto fuel quantity indication wiring; the Board found "insufficient attention" had been paid to aircraft wiring. |
| 10 | Aloha Airlines Flight 243, 1988 | Human Factors and the Dirty Dozen | The maintenance program failed to detect disbonding and fatigue damage in a lap joint. Built in Human Factors. |

Next in line: Air Transat Flight 236 (wrong configuration on an engine change, tubes rubbed through), Qantas Flight 72
(air data unit spikes on the bus), Japan Airlines Boeing 787 battery fire, Alaska Airlines Flight 261 (end play record and
measuring fixture), Continental Express Flight 2574 (shift turnover), Korean Air Flight 801 (glideslope out of service),
Cerritos 1986 (Mode C), Boeing 787 generator control unit AD (248 days).

---

## Part 2. Incident register

One entry per event, with the report, what it found, and image candidates. The lessons in Part 4 point here.

### Aeroperú Flight 603, Boeing 757-200 N52AW, 2 October 1996, off Lima, Peru (kind A)
- Report: Accident Investigation Board, Directorate General of Air Transport (DGTA), Peru, "Accident of the Boeing 757-200
  aircraft operated by Empresa de Transporte Aéreo del Perú S.A. Aeroperú", Lima, December 1996. No report number printed.
  English translation (read in full): https://www.skybrary.aero/bookshelf/books/1719.pdf (redirects to
  skybrary.aero/sites/default/files/bookshelf/1719.pdf). Spanish original at gob.pe returned 403: UNVERIFIED.
- NTSB urgent safety recommendation A-96-141, 15 November 1996 (highly conspicuous static port covers with warning
  flags): https://www.ntsb.gov/safety/safety-recs/recletters/A96_141.pdf
- Registration is N52AW (not OB-1052, which appears in some secondary sources).
- People aboard: 9 crew and 61 passengers, all killed (report, Injuries).
- Findings: polishing of the lower front fuselage was scheduled, "and it is the normal procedure to cover the static ports
  with adhesive tape, in this case masking tape" (PDF p. 44). A recovered section of the left fuselage showed "the three
  static ports ... covered by adhesive tape (masking tape)" (PDF p. 42). The tape "was not detected during the various
  phases of the aircraft's release to the line mechanic, its transfer to the passenger boarding apron and, lastly, the
  inspection by the crew" (probable principal cause, PDF p. 49). The first anomaly came at about 200 to 300 ft: the
  pilots said the altimeters were stuck (PDF p. 24). Recommendation: "Design eye-catching covers for protecting the
  static ports" (PDF p. 51). The report also lists crew contributing causes; tell only the maintenance chain on a
  technician page, and say the report found crew factors too.
- Technician lesson: every cover, plug and piece of tape put on a port is removed and accounted for before release, and
  the static ports are looked at, not assumed, at every handover.
- Images: no public-domain image found. Aircraft photo
  https://commons.wikimedia.org/wiki/File:Aeroper%C3%BA_Boeing_757-200_N52AW_MIA_1996-1-8.png is GFDL 1.2 (Torsten
  Maiwald), not public domain. Recommend a drawing made for the lesson of a 757 static port plate with tape, drawn from
  the report's description.

### Air France Flight 4590, Concorde F-BTSC, 25 July 2000, Gonesse, France (kind A)
- Report: BEA (Bureau d'Enquêtes et d'Analyses pour la sécurité de l'aviation civile) f-sc000725a, English translation,
  published 16 January 2002. https://bea.aero/uploads/tx_elydbrapports/f-sc000725a.pdf ; FAA-hosted copy (read):
  https://www.faa.gov/sites/faa.gov/files/2022-11/Concorde_Accident_Report.pdf
- FAA Lessons Learned: https://www.faa.gov/lessons_learned/transport_airplane/accidents/F-BTSC
- 109 aboard and 4 people on the ground killed.
- Findings: probable causes include "high-speed passage of a tyre over a part lost by an aircraft that had taken off five
  minutes earlier" (section 3.2, PDF p. 176). The strip came from a Continental Airlines DC-10 thrust reverser cowl and
  had been replaced "by a part which was not in accordance with the manufacturer's specifications"; the cowl support
  "was drilled with thirty-seven holes whereas the installation of the strip requires only twelve", and "a titanium piece
  was used in Houston along with a mastic which is not normally used" (section 2.6, PDF p. 171). Strip size (batch A
  check of section 1.16.6): 435 mm long, 29 to 34 mm wide, about 1.4 mm thick.
- Technician lesson: install parts to the manufacturer's data, and treat anything on a ramp or runway as FOD.
- Already built: `fod-tool-control` page 17 (timeline). That page cites the Flight Safety Foundation summary; switch its
  credit to the BEA report itself.
- Images: no public-domain image found. https://commons.wikimedia.org/wiki/File:F-BTSC_Aircraft.jpg is CC BY-SA 4.0.
  The FAA Lessons Learned photos are "used with permission" and must not be reused.

### Airbus A320 cross-connected sidestick wiring, Frankfurt, 20 March 2001 (kind A)
- Report: German BFU (Bundesstelle für Flugunfalluntersuchung) 5X004-0/01, April 2003. Working copy:
  https://skybrary.aero/sites/default/files/bookshelf/806.pdf . Official BFU URL: UNVERIFIED. Already cited in the built
  `human-factors` lesson (with FAA-H-8083-30B, Chapter 14, Figure 14-32).
- No injuries (115 passengers, 6 crew).
- Findings (section 3.2): during repair of a flight control computer connector, "two pairs of wires had been connected
  inverted". About 420 pins were rewired; the continuity check required by AMM 20-52-10 was cancelled orally; the
  functional check was done from the right sidestick only (batch A reading of the report).
- The report does not name the registration or operator. D-AIPW and Lufthansa come from secondary sources: UNVERIFIED.
- Technician lesson: after any connector rework, ring out every wire you touched, then check the system's direction of
  movement from the side that was worked on.
- Images: use a drawing (connector face with two swapped pairs). The A320 photo on Commons (CC BY-SA 2.0) depends on the
  unverified registration.

### British Airways Flight 5390, BAC One-Eleven G-BJRT, 10 June 1990, over Didcot, England (kind A)
- Report: UK AAIB Aircraft Accident Report 1/92 (EW/C1165), April 1992. https://www.gov.uk/aaib-reports/1-1992-bac-one-eleven-g-bjrt-10-june-1990 ;
  PDF https://assets.publishing.service.gov.uk/media/5422faa7e5274a131400078d/1-1992_G-BJRT.pdf . No FAA Lessons Learned page.
- No deaths; the commander was seriously injured.
- Findings: the specified bolt was A211-8D; 84 A211-8C bolts (about 0.026 inch undersize in diameter) and 6 A211-7D bolts
  (0.1 inch too short) went in. The task was done by one person and not tested until airborne (section 3(b)). The
  manager matched bolts by eye at a poorly lit carousel instead of using the illustrated parts catalog (sections 1.17.4,
  2.2.1, as cited in the built `human-factors` lesson).
- Technician lesson: take the part number from the illustrated parts catalog and check it against the part and its
  label; a part that "looks the same" is not identified.
- Images: https://commons.wikimedia.org/wiki/File:BA_5390_Screw_comparison.jpg (AAIB figure, UK Open Government Licence
  v3.0: credit "Contains public sector information licensed under the Open Government Licence v3.0", AAIB). Aircraft:
  https://commons.wikimedia.org/wiki/File:G-BJRT_BAC1-11_B.A._BHX_15-07-89_(25566356266).jpg (CC BY-SA 2.0, Rob Hodgkins).

### Birgenair Flight 301, Boeing 757-200 TC-GEN, 6 February 1996, off Puerto Plata (kind A)
- Report: Junta Investigadora de Accidentes Aéreos (JIAA), Dirección General de Aeronáutica Civil, Dominican Republic,
  "Final Aviation Accident Report, Birgenair Flight ALW-301" (ICAO-supplied, ALPA translation). FAA-hosted copy (read):
  https://www.faa.gov/sites/faa.gov/files/Birgenair301_Accident_Report.pdf . NTSB letter A-96-15 through -20, 31 May 1996:
  https://www.ntsb.gov/safety/safety-recs/RecLetters/A96_15_20.pdf
- FAA Lessons Learned: https://www.faa.gov/lessons_learned/transport_airplane/accidents/TC-GEN
- All 189 aboard killed.
- Findings: "it is believed that the plane had not flown for twenty (20) days"; "Investigators believe that the engine and
  pitot covers were not installed before or after the engine ground test"; the captain's airspeed indicator gave
  "inaccurate information due to an obstruction of the left upper pitot tube"; "The exact reason for the obstruction of
  the pitot tube was never determined" (PDF p. 21). Maintenance factors listed: "not installing the pitot system covers
  while the aircraft was on the ground, the failure to perform tests for the return to service of the pitot/static system
  after a lengthy time on the ground" (PDF p. 24).
- Do not say a wasp nest blocked the tube. That is a popular account; the report says the cause was never determined.
- Technician lesson: covers on whenever the airplane sits; a pitot-static check before return to service after a long
  time parked.
- Images: NTSB animation (public domain): https://commons.wikimedia.org/wiki/File:Birgenair_Flight_301_NTSB_animation_(long_version).ogv ;
  aircraft photo CC BY-SA 2.0 (Aero Icarus).

### Swissair Flight 111, MD-11 HB-IWF, 2 September 1998, off Peggy's Cove, Nova Scotia (kind B, with an STC link)
- Report: Transportation Safety Board of Canada A98H0003, released 27 March 2003.
  https://www.tsb.gc.ca/eng/rapports-reports/aviation/1998/a98h0003/a98h0003.html
- FAA Lessons Learned: https://www.faa.gov/lessons_learned/transport_airplane/accidents/HB-IWF
- 229 aboard killed.
- Findings as to causes (section 3.1): "The fire most likely started from a wire arcing event." "A segment of in-flight
  entertainment network (IFEN) power supply unit cable (1-3791) exhibited a region of resolidified copper on one wire that
  was caused by an arcing event ... it could not be determined whether this arced wire was the lead event." The MPET
  (metallized polyethylene terephthalate) cover on the insulation blankets was flammable and most likely the first
  material to ignite. The circuit breakers "were not capable of protecting against all types of wire arcing events".
- STC (section 1.18.7): the entertainment network was installed under FAA STC ST00236LA-D; the TSB found it was powered
  from AC Bus 2, which the CABIN BUS switch (first item of the smoke checklist) did not de-energize (section 4.1.7.1).
- Technician lessons: how an arc marks a wire (resolidified copper bead, section 1 on arcing); a circuit breaker protects
  the wire against overload, not against every arc; where an added load is connected matters.
- Images: https://commons.wikimedia.org/wiki/File:Swissair_Flight_111_wreckage.jpg (PD-USGov-FAA, per batch A);
  US Navy recovery photo https://commons.wikimedia.org/wiki/File:Defense.gov_News_Photo_980913-N-3093M-012.jpg
  (PD-USGov-Military-Navy). Prefer a drawing of a wire with an arc bead (TSB Figure 20 is Crown copyright; redraw).

### Eastern Air Lines Flight 401, Lockheed L-1011 N310EA, 29 December 1972, near Miami (kind B)
- Report: NTSB-AAR-73-14, adopted 14 June 1973. https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR7314.pdf
  (scanned; cover read)
- FAA Lessons Learned: https://www.faa.gov/lessons_learned/transport_airplane/accidents/N310EA
- 94 passengers and 5 crew killed; 2 survivors died later (FAA Lessons Learned page).
- Findings: no malfunction "except that both bulbs in the nose landing gear position indicating system were burned out"
  (finding 3); the crew, preoccupied with the gear indication, did not notice the descent (probable cause).
- Technician lesson: an indicator lamp is part of a system the crew trusts; lamp test, the right bulb, and a press-to-test
  that works.
- Images: https://commons.wikimedia.org/wiki/File:Eastern_401_wreckage.jpg is tagged PD-USGov-NTSB but credits Aviation
  Safety Network: provenance UNVERIFIED. Prefer a drawing of the gear indicator lamp assembly.

### XL Airways Germany Flight 888T, Airbus A320 D-AXLA, 27 November 2008, off Canet-Plage, France (kind A)
- Report: BEA final report on D-AXLA. https://bea.aero/fileadmin/documents/docspa/2008/d-la081127.en/pdf/d-la081127.en.pdf
  (read); synopsis https://bea.aero/fileadmin/documents/enquetes/perpignan/synopsis.en.pdf
- 7 aboard killed (BEA synopsis).
- Findings: "a rinse with fresh water was performed ... without following the rinsing task procedure in the aeroplane
  cleaning procedure, and notably without any protection for the angle of attack sensors"; water "remained there until
  the accident flight, three days later" (PDF p. 96); "The temperatures encountered during the climb caused this water
  to freeze and the AOA sensors to block" (PDF p. 90). The flight was an improvised check of the angle of attack
  protections; tell the maintenance link and say the report found other factors too.
- Technician lesson: the cleaning and painting procedures name the probes and ports to protect; follow them, then remove
  every protection and inspect before release.
- Images: aircraft photo CC BY-SA 4.0 (https://commons.wikimedia.org/wiki/File:D-AXLA_Aircraft.jpg). Prefer a drawing.

### TWA Flight 800, Boeing 747-131 N93119, 17 July 1996, off East Moriches, New York (kind B)
- Report: NTSB/AAR-00/03, adopted 23 August 2000. https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR0003.pdf
- FAA Lessons Learned: https://www.faa.gov/lessons_learned/transport_airplane/accidents/N93119
- 230 aboard killed.
- Probable cause (PDF p. 326): an explosion of the center wing fuel tank; "The source of ignition energy for the explosion
  could not be determined with certainty, but, of the sources evaluated by the investigation, the most likely was a
  short circuit outside of the CWT that allowed excessive voltage to enter it through electrical wiring associated with
  the fuel quantity indication system." Findings on wire separation and silver-sulfide deposits on fuel quantity parts,
  and that "insufficient attention" had been paid to aircraft wiring (batch A, findings 15 to 18 and 23 to 24).
- Technician lesson: wires that share a bundle can share energy when insulation fails; separation and inspection of
  wiring are safety tasks.
- Images (public domain, NTSB): https://commons.wikimedia.org/wiki/File:Center_Wing_Fuel_Tank.png ; the NTSB
  reconstruction photos, for example
  https://commons.wikimedia.org/wiki/File:TWA_flight_800_reconstruction_by_the_National_Transportation_Safety_Board_was_used_as_a_training_aid_for_about_20_years_until_2021_at_the_NTSB%E2%80%99s_Training_Center_in_Ashburn,_Virginia_03.jpg

### Aloha Airlines Flight 243, Boeing 737-200 N73711, 28 April 1988, near Maui (kind A)
- Report: NTSB/AAR-89/03, 14 June 1989. https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR8903.pdf (scanned)
- FAA Lessons Learned: https://www.faa.gov/lessons_learned/transport_airplane/accidents/N73711
- One flight attendant killed; 8 serious injuries.
- Probable cause: the maintenance program failed to detect significant disbonding and fatigue damage of the lap joint
  (FAA Lessons Learned summary; report section 3.2).
- Already built in `human-factors` (page 2, credited NTSB AAR-89/03).
- Images (public domain, NTSB): https://commons.wikimedia.org/wiki/File:Aloha_Airlines_Flight_243_fuselage.png

### Air Transat Flight 236, Airbus A330-243 C-GITS, 24 August 2001, Lajes, Azores (kind A)
- Report: Portugal GPIAA Final Investigation Report 22/ACCID/GPIAA/2001, 18 October 2004. FAA-hosted copy (read):
  https://www.faa.gov/sites/faa.gov/files/2022-11/AirTransat236_AccidentReport.pdf . Official GPIAAF URL: UNVERIFIED.
- FAA Lessons Learned: https://www.faa.gov/lessons_learned/transport_airplane/accidents/C-GITS
- No deaths; 2 passengers seriously injured in the evacuation (batch A).
- Causes and contributing factors (PDF p. 84): the replacement engine arrived "in an unexpected pre-SB configuration";
  the "lead technician relied on verbal advice ... rather than acquiring access to the relevant SB"; a post-mod fuel tube
  installed with a pre-mod hydraulic tube "resulted in the tubes coming into contact with each other, which resulted in
  the fracture of the fuel tube and the fuel leak".
- Technician lessons: check the configuration (service bulletin status) of a part against the airplane before you
  install it; any two lines or wires that touch will wear through.
- Images: https://commons.wikimedia.org/wiki/File:Air_Transat_Flight_236_after_emergency_landing.jpg is tagged
  PD-USGov-FAA but its photographer is unclear: provenance UNVERIFIED.

### ValuJet Flight 592, DC-9-32 N904VJ, 11 May 1996, Everglades, Florida (kind A)
- Report: NTSB/AAR-97/06, adopted 19 August 1997. https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR9706.pdf
- FAA Lessons Learned: https://www.faa.gov/lessons_learned/transport_airplane/accidents/N904VJ
- 110 aboard killed.
- Findings: chemical oxygen generators removed by SabreTech, a repair station, were shipped without safety caps; work
  card 0069 was signed although the caps were not installed (PDF pp. 29 to 30); a stock clerk "identified the
  generators as 'empty canisters' ... when he saw that they had green tags on them, he assumed that meant they were
  empty" (PDF p. 33). Probable causes (batch A, report section 3.2) include the failure to properly prepare, package and
  identify the generators.
- Technician lessons: a signature says the work is done; a tag or label must say what the item is and its hazard.
- Images: public-domain FAA and NTSB wreckage photos exist on Commons; prefer a drawing of an oxygen generator with its
  safety cap.

### Alaska Airlines Flight 261, MD-83 N963AS, 31 January 2000, off Anacapa Island, California (kind A)
- Report: NTSB/AAR-02/01, adopted 30 December 2002. https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR0201.pdf
- FAA Lessons Learned: https://www.faa.gov/lessons_learned/transport_airplane/accidents/N963AS
- 88 aboard killed.
- Probable cause (PDF p. 194): failure of the jackscrew assembly's acme nut threads from excessive wear "resulting from
  Alaska Airlines' insufficient lubrication"; contributing, the extended lubrication and end play check intervals.
- Records and measuring: the end play limit was 0.040 inch (PDF p. 36); "Before the accident, there was no requirement to
  record or track end play measurements" (footnote 49, PDF p. 37). In September 1997 a nonroutine card recorded the
  0.040 inch limit and planned replacement; it was crossed out and a recheck recorded 0.033 inch (section 1.6.3.4, batch A
  reading); the Board could not determine whether the shop's own restraining fixture read low (pp. 157 to 158, batch A).
- Technician lessons: a measurement at the limit is reported, not explained away; a measurement is only as good as the
  tool and fixture that took it; the record is how the next person sees the trend.
- Images (public domain, NTSB): https://commons.wikimedia.org/wiki/File:Screwshavings2_sm.PNG (jackscrew thread remains).

### Air Midwest Flight 5481, Beech 1900D N233YV, 8 January 2003, Charlotte, North Carolina (kind A)
- Report: NTSB/AAR-04/01, adopted 26 February 2004. https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR0401.pdf .
  No FAA Lessons Learned page found.
- 21 killed.
- Findings: the mechanic "bypassed several steps of the complete elevator control system rigging procedure"; the quality
  assurance inspector "and the mechanic discussed which steps to bypass" (PDF p. 20). Probable cause: incorrect rigging
  of the elevator control system, compounded by an aft center of gravity (PDF p. 143).
- Technician lesson: a procedure's steps are done in full, in order; a check that skips the step that would catch the
  error is not a check.
- Images: NTSB wreckage drawing or photo (public domain) per batch A; prefer a drawing of the work card steps.

### Continental Express Flight 2574, EMB-120RT N33701, 11 September 1991, Eagle Lake, Texas (kind A)
- Report: NTSB/AAR-92/04, adopted 21 July 1992. https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR9204.pdf
- FAA Lessons Learned: https://www.faa.gov/lessons_learned/transport_airplane/accidents/N33701
- 14 killed.
- Findings: the upper row of 47 screws on the left horizontal stabilizer leading edge had been removed the night before;
  the turnover did not pass that on. Built in `human-factors` and `shop-communication` (NTSB/AAR-92/04, section 1.17.3
  and page 43).
- Images (public domain, FAA): https://commons.wikimedia.org/wiki/File:Continental_Express_Flight_2574_left_side_leading_edge_and_deice_boot.jpg

### Partnair Flight 394, Convair 580 LN-PAA, 8 September 1989, off Hirtshals, Denmark (kind A)
- Report: Norway AIBN HAV 02/93 (English extract), February 1993.
  https://www.aibn.no/rapport-02-1993-eng-pdf?lcid=1033&pid=Native-ContentFile-File&attach=1 (scanned)
- 55 killed.
- Findings (report page 112): vertical stabilizer attachment pins and sleeves "were of an inferior quality and did not
  satisfy specified values for hardness and tensile strength"; an APU support was "of a non-standard design and of unknown
  origin".
- Do not say "counterfeit bolts". The report's English text says pins and sleeves of inferior quality; the counterfeit
  story is UNVERIFIED against the report.
- Technician lesson: a part with no traceable origin is not airworthy, however well it fits.
- Images: https://commons.wikimedia.org/wiki/File:Partnair_LN-PAA_wreckage.jpg (PD-NorwayGov, AIBN).

### Pan Am Flight 214, Boeing 707-121 N709PA, 8 December 1963, near Elkton, Maryland (kind C)
- Report: Civil Aeronautics Board, File No. 1-0015, adopted 25 February 1965.
  https://rosap.ntl.bts.gov/view/dot/33698 (PDF https://rosap.ntl.bts.gov/view/dot/33698/dot_33698_DS1.pdf)
- FAA Lessons Learned: https://www.faa.gov/lessons_learned/transport_airplane/accidents/N709PA
- 81 killed.
- Probable cause: "lightning-induced ignition of the fuel/air mixture in the No. 1 reserve fuel tank". Airworthiness
  directives on fuel tank lightning protection followed (FAA Lessons Learned page). "Static wicks were mandated" is
  UNVERIFIED.
- Technician lesson: bonding, fasteners and access panels are part of the airplane's lightning protection.
- Images: https://commons.wikimedia.org/wiki/File:PanAm214.jpg (PD-USGov-DOT, from the CAB report).

### Japan Airlines Boeing 787-8 JA829J battery fire, 7 January 2013, Boston (kind B)
- Report: NTSB/AIR-14/01, Incident Report. https://www.ntsb.gov/investigations/AccidentReports/Reports/AIR1401.pdf
- No injuries reported (airplane parked at the gate).
- Probable cause (PDF p. 92): "an internal short circuit within a cell of the auxiliary power unit (APU) lithium-ion
  battery, which led to thermal runaway that cascaded to adjacent cells, resulting in the release of smoke and fire",
  with design and certification findings.
- Technician lesson: a lithium-ion battery can feed its own fire through thermal runaway; handle, store and respond to it
  by its own procedures.
- Images (public domain, NTSB): https://commons.wikimedia.org/wiki/File:1-7-12_JAL787_APU_Battery.JPG

### All Nippon Airways Boeing 787-8 JA804A battery event, 16 January 2013, Takamatsu (kind B)
- Report: Japan Transport Safety Board AI2014-4, Aircraft Serious Incident Investigation Report, 25 September 2014.
  https://jtsb.mlit.go.jp/eng-air_report/JA804A.pdf (cover read)
- Finding (per secondary sources): the main battery went into thermal runaway during the climb. Report section: UNVERIFIED.

### UPS Flight 6, Boeing 747-44AF N571UP, 3 September 2010, Dubai (kind B)
- Report: UAE General Civil Aviation Authority, Report 13/2010, "Uncontained Cargo Fire Leading to Loss of Control
  Inflight and Uncontrolled Descent Into Terrain". https://www.gcaa.gov.ae/en/departments/airaccidentinvestigation/Lists/Incidents%20Investigation%20Reports/Attachments/56/2010-2010%20-%20Final%20Report%20-%20Boeing%20747-44AF%20-%20N571UP%20-%20Report%2013%202010.pdf
  (loads; text not read)
- FAA Lessons Learned: https://www.faa.gov/lessons_learned/transport_airplane/accidents/N571UP ("carrying mixed cargo,
  including lithium-type batteries")
- 2 crew killed. Ignition of lithium batteries in cargo: report section UNVERIFIED. This is a cargo event, not an
  aircraft battery; use it only on Battery Safety, and only for what lithium cells do in a fire.

### Qantas Flight 72, Airbus A330-303 VH-QPA, 7 October 2008, near Learmonth, Western Australia (kind B)
- Report: ATSB AO-2008-070, "In-flight upset, 154 km west of Learmonth, WA, 7 October 2008, VH-QPA, Airbus A330-303",
  final report December 2011. URL from search: https://www.atsb.gov.au/investigations/ao-2008-070 (site did not respond
  on 2026-10-01: load UNVERIFIED).
- Findings (ATSB summary, per batch B): one of three air data inertial reference units (ADIRUs) sent intermittent spikes
  in angle of attack data; a limitation in the flight control computer software let the spikes command a pitch-down.
  Injuries: 119, 12 serious (secondary source; UNVERIFIED in the report).
- Technician lesson: an intermittent source fault can pass checks built for a clean failure; the same bad data reaches
  every box that listens to that source.
- Images: cabin damage, https://commons.wikimedia.org/wiki/File:Qantas_Flight_72_damage.png (CC BY 3.0 AU, ATSB).

### Malaysia Airlines Flight 124, Boeing 777-200 9M-MRG, 1 August 2005, near Perth (kind B)
- Report: ATSB 200503722, "In-flight upset, Boeing 777-200, 9M-MRG, 240 km north-west of Perth". Load UNVERIFIED (site
  did not respond).
- Findings (secondary): a latent software error let the ADIRU use data from a failed accelerometer. No injuries reported.
- Use only after the report is read.

### Adam Air Flight 574, Boeing 737-4Q8 PK-KKW, 1 January 2007, Makassar Strait (kind B)
- Report: Indonesia NTSC (KNKT) KNKT/07.01/08.01.36, 25 March 2008.
  https://knkt.go.id/Repo/Files/Laporan/Penerbangan/2007/PK-KKW%20Final%20Report.pdf (loads; text not read)
- 102 killed. Crew attention on troubleshooting the inertial reference system (IRS). "154 recurring defects ... related to
  the aircraft's IRS" in the three months before: from a search excerpt only; another source says 30. UNVERIFIED.

### Turkish Airlines Flight 1951, Boeing 737-800 TC-JGE, 25 February 2009, near Amsterdam (kind B)
- Report: Dutch Safety Board, "Crashed during approach, Boeing 737-800, near Amsterdam Schiphol Airport, 25 February 2009",
  6 May 2010. Landing page: https://onderzoeksraad.nl/en/onderzoek/turkish-airlines-crashed-during-approach-boeing-737-800-amsterdam/
  (report PDF link not confirmed as the final report: UNVERIFIED).
- 9 killed, 120 injured (batch B). The left radio altimeter read -8 ft at about 1,950 ft and put the autothrottle into
  retard mode (secondary sources); the prior fault history in the report: UNVERIFIED.

### Korean Air Flight 801, Boeing 747-300 HL7468, 6 August 1997, Guam (kind B)
- Report: NTSB/AAR-00/01, adopted 13 January 2000. https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR0001.pdf
- FAA Lessons Learned: https://www.faa.gov/lessons_learned/transport_airplane/accidents/HL7468
- 228 killed.
- Findings: the controller cleared the flight for the ILS "glideslope unusable" (PDF p. 17); the report records a
  captain's earlier statement that the glideslope needle had shown centered "with no warnings" while the glideslope was
  out of service (PDF p. 46). Probable cause centers on the crew's nonprecision approach; contributing, the intentional
  inhibition of the minimum safe altitude warning (PDF p. 189).
- Technician lesson: a needle with no flag is not proof of a valid signal; know how the receiver flags a missing or
  unusable glideslope.
- Images (public domain, US Navy): https://commons.wikimedia.org/wiki/File:Korean_Airlines_flight_801_crash_site.jpg

### Aeroméxico Flight 498 and Piper PA-28-181, Cerritos, California, 31 August 1986 (kind C)
- Report: NTSB/AAR-87/07. https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR8707.pdf (cover read)
- FAA Lessons Learned: https://www.faa.gov/lessons_learned/transport_airplane/accidents/N533PS (page covers PSA 182 and
  Aeroméxico 498)
- 82 killed (batch B, secondary). The Piper had no Mode C altitude reporting and entered the terminal control area
  without clearance (secondary). Today 14 CFR 91.215(b)(2) requires Mode C within 30 NM of listed airports. The link
  between this accident and the 1987 TCAS law and the 1988 Mode C rule: UNVERIFIED; read the FAA Lessons Learned page
  before using it.

### Gol Flight 1907 and Embraer Legacy N600XL, 29 September 2006, Brazil (kind B)
- Report: CENIPA final report (cover reads "A-00X/CENIPA/2008"; also cited as A-022/CENIPA/2008: number UNVERIFIED).
  NTSB docket copy: https://data.ntsb.gov/Docket/Document/docBLOB?FileExtension=.PDF&FileName=CENIPA+Final+Report-Redacted.PDF&ID=40304868
- 154 killed. The Legacy's transponder was not transmitting and its collision avoidance system was not functioning
  (secondary; report section UNVERIFIED).

### Überlingen mid-air collision, Tu-154M RA-85816 and Boeing 757 A9C-DHL, 1 July 2002 (kind B)
- Report: German BFU AX001-1-2/02, May 2004.
  https://www.bfu-web.de/EN/Publications/FinalReports/2002/Report_02_AX001-1-2_Ueberlingen_Report.pdf?__blob=publicationFile&v=1
- FAA Lessons Learned: https://www.faa.gov/lessons_learned/transport_airplane/accidents/RA-85816 (links the BFU
  conclusions and recommendations)
- 71 killed. One crew followed a TCAS resolution advisory and the other followed a conflicting ATC instruction
  (secondary wording; quote the BFU conclusions file linked from the FAA page before use).

### Korean Air Lines Flight 007, Boeing 747 HL7442, 1 September 1983 (kind C)
- The 16 September 1983 White House statement: "the United States is prepared to make available to civilian aircraft the
  facilities of its Global Positioning System when it becomes operational in 1988."
  https://www.presidency.ucsb.edu/documents/statement-deputy-press-secretary-speakes-the-soviet-attack-korean-civilian-airliner-0
- 269 killed. ICAO investigation titles and document numbers: UNVERIFIED. Use only as the GPS history milestone.

### Hubble Space Telescope mirror flaw, 1990 (kind A, measurement)
- Report: "The Hubble Space Telescope Optical Systems Failure Report", NASA-TM-103443, 1 November 1990.
  https://ntrs.nasa.gov/citations/19910003124
- Findings (NTRS abstract): a lens in the reflective null corrector, the instrument used to test the mirror's shape, was
  incorrectly spaced; "the measured amount, 1.3 mm, accounts in detail for ... the observed image blurring"; other tests
  had shown the error, and "Both indicators of error were discounted at the time as being themselves flawed."
- Technician lesson: prove the instrument before you trust the reading, and do not explain away a second instrument that
  disagrees.
- Images (public domain, NASA): https://commons.wikimedia.org/wiki/File:Hubble_mirror_polishing.jpg

### Boeing 787 generator control units, 248 days (kind B, an airworthiness directive)
- FAA AD 2015-09-07, Amendment 39-18153, Docket FAA-2015-0936, effective 1 May 2015.
  https://www.govinfo.gov/content/pkg/FR-2015-05-01/html/2015-10066.htm
- Unsafe condition: a software counter in the generator control units (GCUs) "will overflow after 248 days" of
  continuous power, the four main GCUs go to failsafe, and the airplane loses all AC electrical power. Required action:
  power the airplane down at intervals of no more than 120 days.
- Technician lesson: an AD can require a repetitive action, not only a part; it is tracked in the records like any
  inspection.

### Hindenburg, LZ 129, 6 May 1937, Lakehurst, New Jersey (kind C)
- Report: U.S. Department of Commerce, published in the Air Commerce Bulletin, 15 August 1937. Conclusion: "a leak at or
  in the vicinity of cell 4 and 5 caused a combustible mixture of hydrogen and air to form ... The theory that a brush
  discharge ignited such mixture appears most probable." Transcription: https://www.airships.net/hindenburg/disaster/commerce-department-report/ ;
  Civil Aeronautics Authority comparison report (1938), US DOT library: https://rosap.ntl.bts.gov/view/dot/81236
- 36 killed (widely reported; not read in the report: UNVERIFIED).
- Technician lesson: separated charge can jump as a spark, and a spark lights fuel vapor; that is why aircraft and fuel
  trucks are bonded.
- Image: https://commons.wikimedia.org/wiki/File:Hindenburg_disaster.jpg (Sam Shere, 6 May 1937; public domain in the
  US, published 1931 to 1963 and copyright not renewed, per the file page).

### NIOSH FACE 89-19, maintenance mechanic electrocuted, 1989 (kind A, shop)
- Report: NIOSH Fatality Assessment and Control Evaluation (FACE) 89-19, "Maintenance Mechanic Electrocuted While Touching
  Damaged Power Cord", 31 March 1989. https://stacks.cdc.gov/view/cdc/164366
- Findings: a power cord worn through by a rotating spool exposed a 277-volt conductor; the worker was standing in water.
  Recommendations: fixed wiring where possible, and strain relief on cord connections.
- Not aviation. Use it for the shop electrical hazard only.

### NASA Lessons Learned 301, ESD wrist strap fiber, Magellan spacecraft (kind A)
- NASA Lessons Learned Information System, Lesson 301, "Electrostatic Discharge (ESD) Wrist Strap Contamination of
  Magellan Flight Hardware". https://llis.nasa.gov/lesson/301 (page renders by script; text read from the search
  abstract only: check the page in a browser).
- Finding: a conductive fiber from a fabric ESD wrist strap was found on a relay pin during testing; the lesson
  recommends non-shedding wrist straps.

---

## Part 3. History register

People and milestones with a verified fact and a checked image. Portraits are all from Wikimedia Commons unless noted;
"PD" means the Commons file page gives a public domain licence.

| Person or milestone | Verified fact for the page | Source | Image (file page, licence) |
|---|---|---|---|
| Michael Faraday | 1831 induction; first transformer ring (built); 1836 foil room (built) | built lessons; Royal Institution | https://commons.wikimedia.org/wiki/File:M_Faraday_Th_Phillips_oil_1842.jpg (Thomas Phillips, 1842, PD) |
| Nikola Tesla and George Westinghouse | "In July 1888 ... Westinghouse licensed Nikola Tesla's U.S. patents for a polyphase AC induction motor" | ETHW, https://ethw.org/Initial_Tesla_Polyphase_/_%22Three-Phase%22_Alternating-Current_Systems_and_Metering_Development ; U.S. DOE, https://www.energy.gov/articles/war-currents-ac-vs-dc-power | Tesla: https://commons.wikimedia.org/wiki/File:Tesla_circa_1890.jpeg (Napoleon Sarony, PD). Westinghouse: https://commons.wikimedia.org/wiki/File:George_Westinghouse,_half-length_portrait,_facing_front_LCCN93511337.jpg (J. G. Gessford, 1900, Library of Congress, PD) |
| William Stanley Jr. | 20 March 1886, AC with transformers on Main Street, Great Barrington, Massachusetts | IEEE Milestone, https://ethw.org/Milestones:Alternating_Current_Electrification,_1886 | Patent drawing: https://commons.wikimedia.org/wiki/File:StanleyTransformer.png (US Patent 349,611, 21 September 1886, PD) |
| Joseph Henry | 1832 self-induction; the henry (built) | built `capacitors-inductors` | https://commons.wikimedia.org/wiki/File:Joseph_Henry_-_Brady-Handy.jpg (Brady or Handy, Library of Congress, PD) |
| Alessandro Volta | Voltaic pile, announced in a letter dated 20 March 1800 (ETHW dates the invention 1799) (Blueprint, built) | built `voltage`; https://ethw.org/Alessandro_Volta | Built lesson uses https://commons.wikimedia.org/wiki/File:Alessandro_Volta_01.jpg (PD, but unknown author and a private website source). Better sourced: Bettoni engraving, Smithsonian Libraries https://library.si.edu/image-gallery/74048 ("No Copyright - United States") |
| Gustav Kirchhoff | 1845 circuit laws (Blueprint, built) | built `voltage` | https://commons.wikimedia.org/wiki/File:Gustav_Robert_Kirchhoff.jpg (Smithsonian Libraries, PD) |
| André-Marie Ampère | 1820 parallel wires attract or repel (Blueprint) | Blueprint | https://commons.wikimedia.org/wiki/File:Ampere_Andre_1825.jpg (Ambroise Tardieu, 1825, PD) |
| Hans Christian Ørsted | Published on 21 July 1820 that a current deflects a compass needle; Ampère presented to the Académie on 18 September 1820 | IEEE Milestone proposal, https://ieeemilestones.ethw.org/Milestone-Proposal:Ampere_discovers_Electrodynamics,_1820 | https://commons.wikimedia.org/wiki/File:C.A._Jensen_-_Portrait_of_the_Physicist_Hans_Christian_%C3%98rsted_-_KMS8176_-_Statens_Museum_for_Kunst.jpg (C. A. Jensen, 1832 to 1833, PD) |
| Georg Simon Ohm | 1827 law (Blueprint, built) | built `ohms-law-lesson` | already in the lesson's assets |
| Charles-Augustin de Coulomb | built in `principles` | built | https://commons.wikimedia.org/wiki/File:Charles_de_coulomb.jpg (Louis Hierle, 1894, PD) |
| Benjamin Franklin | Kite account published 19 October 1752; charge from the storm, sparks from the key; "the kite was not struck by lightning" | Founders Online, https://founders.archives.gov/documents/Franklin/01-04-02-0135 ; Franklin Institute, https://fi.edu/en/science-and-education/benjamin-franklin/kite-key-experiment | https://commons.wikimedia.org/wiki/File:Benjamin_Franklin_by_Joseph_Duplessis_1778.jpg (Duplessis, PD, National Portrait Gallery) |
| J. J. Thomson | Announced the electron (his "corpuscles") in a Royal Institution lecture in 1897 | Royal Institution, https://www.rigb.org/explore-science/explore/blog/subatomic-science-jj-thomsons-discovery-electron | https://commons.wikimedia.org/wiki/File:J.J._Thomson_LCCN2014715407.jpg (Bain News Service, LOC, no known restrictions) or https://commons.wikimedia.org/wiki/File:J._J._Thomson_(5227651).jpg (1913, National Library of Wales, PD) |
| Jacques-Arsène d'Arsonval | Moving-coil galvanometer with Marcel Deprez, early 1880s (Kenyon: "early 1880s"; 1882 in other sources); Edward Weston's commercial form by 1888: UNVERIFIED | Kenyon College, https://physics.kenyon.edu/EarlyApparatus/Electrical_Measurements/DArsonval_Galvanometer/DArsonval_Galvanometer.html | https://commons.wikimedia.org/wiki/File:Arsonval,_Ars%C3%A8ne_d%27_CIPA0086.jpg (Licence Ouverte, attribution, BIU Santé). Avoid the 1933 Agence Rol photo and the Henri Manuel photo: US status unclear. Safest: the meter movement diagram, https://commons.wikimedia.org/wiki/File:D'Arsonval_ammeter_movement.jpg (Flather, 1900, PD in the US) |
| Karl Ferdinand Braun | 1897 cathode-ray tube; 1909 Nobel with Marconi (ETHW, https://ethw.org/Karl_Braun, agrees on dates and the Nobel); 1874 one-way conduction in metal sulfide crystals (Encyclopedia.com only: confirm before use) | Linda Hall Library; Encyclopedia.com (see `history-page-pattern.md`) | https://commons.wikimedia.org/wiki/File:Dr._Ferdinand_Braun,_head-and-shoulders_portrait,_facing_right_LCCN96509048.jpg (Bain Collection, 1910, LOC, PD) |
| George Boole | 1815 to 1864; first mathematics professor at Queen's College Cork, 1849; "The Laws of Thought", 1854 | University College Cork, https://www.ucc.ie/en/heritage/history/people/ucc-staff/professor-george-boole/ | https://commons.wikimedia.org/wiki/File:PSM_V17_D740_George_Boole.jpg (Popular Science Monthly, 1880, PD in the US) |
| Claude Shannon | Master's thesis written 1937 applied Boolean algebra to switching circuits (MIT dates the degree 1940) | Computer History Museum, https://www.computerhistory.org/revolution/digital-logic/12/269 | https://commons.wikimedia.org/wiki/File:C.E._Shannon._Tekniska_museet_43069.jpg (CC BY 2.0); no public-domain photo found |
| Bardeen, Brattain and Shockley | First successful point-contact transistor amplifier, 16 December 1947; shown 23 December; 1956 Nobel Prize | Computer History Museum, https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/ | Replica: https://commons.wikimedia.org/wiki/File:Replica-of-first-transistor.jpg (White House, 1997, PD). Group photo https://commons.wikimedia.org/wiki/File:Bardeen_Shockley_Brattain_1948.JPG is PD only on a "no notice" argument: medium risk |
| Leyden jar | Ewald von Kleist, 4 November 1745; Pieter van Musschenbroek, 1746 | ETHW, https://ethw.org/Leyden_jar | https://commons.wikimedia.org/wiki/File:Leydenjar.png (1913, PD in the US) |
| Henri Pitot | 1732 tube in the Seine (Blueprint, built) | built `pitot-static` | https://commons.wikimedia.org/wiki/File:Henri_de_Pitot.jpg (PD) |
| Paul Kollsman and Jimmy Doolittle | 1928 adjustable altimeter (Kollsman, 1900 to 1982, National Inventors Hall of Fame, https://www.invent.org/inductees/paul-kollsman); 24 September 1929 blind flight (built) | IEEE Milestone, https://ethw.org/Milestones:First_Blind_Takeoff,_Flight_and_Landing,_1929 | Doolittle: https://commons.wikimedia.org/wiki/File:James_H_Doolittle.jpg (USAF, PD); the 1929 panel: https://commons.wikimedia.org/wiki/File:Doolittle-inst-panel.jpg (USAF, PD). No free Kollsman portrait; use https://commons.wikimedia.org/wiki/File:Kollsman_Drum_Altimeter.jpg (FAA, 1972, PD). Do not use File:Jimmy_Doolittle_Flying_the_first_blind_flight.jpg (tagged CC BY-SA 4.0 with no credible source). |
| Léon Foucault | 1852 gyroscope (built) | built `gyroscopic-instruments` | https://commons.wikimedia.org/wiki/File:Portrait_Leon_Foucault_1882.jpg (Bertall, PD) |
| Elmer Sperry and the Sperry Gyroscope Company | Sperry artificial horizon and directional gyro on the 1929 flight; Elmer Sperry, 1860 to 1930 | IEEE Milestone (above); https://ethw.org/Elmer_A._Sperry | https://commons.wikimedia.org/wiki/File:Elmer_Ambrose_Sperry.jpg (1918, PD in the US); Lawrence Sperry, https://commons.wikimedia.org/wiki/File:Lawrence_Sperry_LCCN2002697155.jpg (1922, LOC, no known restrictions). The Blueprint names Elmer Sperry Jr. as developer: UNVERIFIED, and no verified image of him. |
| Guglielmo Marconi | 1909 Nobel with Braun; grounded vertical antenna (Blueprint) | Linda Hall (Nobel); FAA-H-8083-31B pp. 11-38, 11-39 (Blueprint) | https://commons.wikimedia.org/wiki/File:Guglielmo_Marconi.jpg (Pach Brothers, 1908, LOC, PD) |
| Heinrich Hertz | unit of frequency; dipole called a Hertz antenna (Blueprint) | Blueprint | https://commons.wikimedia.org/wiki/File:HEINRICH_HERTZ.JPG (Robert Krewaldt, about 1890, PD) |
| Reginald Fessenden | 1866 to 1932; broadcasts from Brant Rock, Massachusetts, in December 1906 | ETHW, https://ethw.org/Reginald_A._Fessenden | https://commons.wikimedia.org/wiki/File:Fessenden.JPG (Harper's Weekly, 1903, PD) |
| First ILS landing of a scheduled airliner | 26 January 1938, Pennsylvania-Central Airlines Boeing 247-D, Washington to Pittsburgh, landed in a snowstorm using the ILS | Centennial of Flight Commission, https://www.centennialofflight.net/essay/Government_Role/landing_nav/POL14.htm | no public-domain photo found |
| NASA Langley Boeing 737 (NASA 515) | Acquired 1974; more than 20 research projects including glass cockpits | NASA SP-4216, https://ntrs.nasa.gov/citations/19940028287 | https://commons.wikimedia.org/wiki/File:NASA_515_Boeing_B-737-130.jpg (NASA, 1989, PD) |
| IFF in World War II | Radar answered by a box on the airplane; civil secondary radar kept the modes (Blueprint, FAA-H-8083-31B p. 11-53) | Blueprint | https://commons.wikimedia.org/wiki/File:IFF_display_on_A-scope.jpg (US Army TM 11-1133, 1943, PD) |
| Four-course radio range and the first VORs | Four-course range introduced 1928 to 1929; CAA testing VOR from 1944; eight range stations on the New York to Chicago airway converted to VOR in 1946, general installation from 1947 | Centennial of Flight Commission, https://www.centennialofflight.net/essay/Government_Role/navigation/POL13.htm ; FAA history photo album, "The Foundation", https://www.faa.gov/about/history/photo_album/foundation (via search excerpt; open in a browser) | Range approach chart: https://commons.wikimedia.org/wiki/File:Stockholm_Bromma_Range_Approach_Chart_1946.jpg (US DoD, PD). Radio range receiver, 1929: https://commons.wikimedia.org/wiki/File:Receiver,_Radio_Range,_ARC,_Lab_Prototype,_Model_B_-_DPLA_-_f0f68ca8a23dfb7213fd6aa014f61843_(page_1).jpg (CC0 via DPLA) |
| GPS | First satellite 1978; civil use announced 16 September 1983 (statement above) | presidency.ucsb.edu (above); 1978 launch from the Blueprint | https://commons.wikimedia.org/wiki/File:GPS-IIR.jpg (US Government, PD) |
| Air Commerce Act and the first Air Commerce Regulations | Signed 20 May 1926; the Air Commerce Regulations, effective 31 December 1926, included licensing of pilots and mechanics | FAA history, "Origins of the FAA", https://www.faa.gov/sites/faa.gov/files/about/history/milestones/FAA_Origins.pdf (via search excerpt; open in a browser) | none needed (a page from the 1926 regulations, US government work, if found) |
| Grand Canyon collision and the FAA | 30 June 1956, 128 killed; a catalyst for the Federal Aviation Agency, created 1958 | FAA Lessons Learned, https://www.faa.gov/lessons_learned/transport_airplane/accidents/N6902C | photos on the FAA page: check licence before use |
| Hindenburg | Commerce Department, 1937: brush discharge most probable | Part 2 | https://commons.wikimedia.org/wiki/File:Hindenburg_disaster.jpg (PD, not renewed) |

---

## Part 4. Lesson by lesson

Format for each lesson: history candidates, incident candidates (pointing to Part 2), the technician lesson for this
lesson, and notes. "None verified" means no candidate passed the test in `incident-page-pattern.md`; do not force one.

### Room 1. Shop Safety

**1. Safety Data Sheets** (`safety-data-sheets`, CAET 8.1, Blueprint rebuild)
- History: OSHA Hazard Communication Standard, 29 CFR 1910.1200, 2012 revision aligned with the Globally Harmonized
  System; 16 numbered sections (Blueprint, 77 FR 17574). Already folded into the built lesson as a credit line.
- Incident: ValuJet Flight 592 (A). Oxygen generators went into a cargo hold tagged and called "empty canisters";
  nobody identified what they were or what hazard they carried (NTSB/AAR-97/06, PDF p. 33).
- Technician lesson: name a chemical item by what it is and what it does, and read its sheet (including Section 14,
  transport information) before it is stored, used or shipped.
- Image: drawing of an oxygen generator with and without its safety cap. Avoid wreckage photos.

**2. Shop Emergencies** (`shop-emergencies`, CAET 8.2, rebuild)
- History: none verified.
- Incident: NIOSH FACE 89-19 (shop, not aviation): a cord worn through by a rotating spool, a 277-volt conductor and a
  wet floor.
- Technician lesson: inspect cords, keep the floor dry, and know where the disconnect is before you need it.
- Note: no aviation report was found for this lesson. Do not use the "let-go current" research without checking it.

**3. Hangar and Flightline Safety** (`hangar-fod-tool-control`, CAET 8.3 and 8.6, split)
- History: none verified.
- Incidents: none verified in this pass. To find one, search NTSB CAROL (https://data.ntsb.gov/carol-main-public/basic-search)
  for final reports with "propeller" and "ground" in the narrative, and read the probable cause. Advisory Circular
  91-42D (propeller and rotor hazards) was cancelled on 9 November 2018; do not cite it as current guidance.
- Note: the Hindenburg (Part 2) shows fuel vapor lit by a spark, but it belongs with Principles of Electricity.

**4. Electrostatic Discharge** (`electrostatic-discharge`, CAET 8.4, rebuild)
- History: Michael Faraday's foil room, 1836 (built, drawn from Experimental Researches in Electricity, paragraphs 1173
  and 1174).
- Incident: NASA Lessons Learned 301 (A): a conductive fiber shed by a fabric ESD wrist strap landed on a relay pin in
  spacecraft hardware. Space hardware, not aircraft; read the page in a browser before use.
- Technician lesson: the wrist strap is equipment: the right type, inspected, worn against the skin.
- Note: no aircraft accident report found that traces an event to static damage of avionics. Do not invent one.

**5. FOD and Tool Control** (`fod-tool-control`, CAET 8.5, rebuild)
- History: none needed.
- Incidents: Concorde (A, built); NTSB Safety Alert SA-054 cases (built).
- Change to the built page: credit the BEA report itself (f-sc000725a, sections 2.6 and 3.2) instead of the Flight
  Safety Foundation summary, and add the report's facts on the strip (37 holes drilled where 12 are needed; titanium;
  a mastic not normally used).

**6. Battery Safety** (`battery-safety`, CAET 8.6, new)
- History: Volta's pile as a callback to Voltage. A lead-acid battery history (Gaston Planté, 1859) is UNVERIFIED.
- Incidents: Japan Airlines Boeing 787 battery fire (B, NTSB/AIR-14/01); All Nippon Airways 787 battery event (B, JTSB
  AI2014-4, read the report before use); UPS Flight 6 (B, cargo lithium batteries, GCAA 13/2010, read before use).
- Technician lesson: a lithium-ion cell in thermal runaway feeds its own fire and spreads to the next cell; handle, charge,
  store and respond to each battery type by its own procedure.
- Image: https://commons.wikimedia.org/wiki/File:1-7-12_JAL787_APU_Battery.JPG (NTSB, public domain).
- Note: the lesson's hook (a wrench across the terminals) is shop practice from the FAA handbook, not from these reports.

### Room 2. Human Factors

**7. Human Factors and the Dirty Dozen** (`human-factors`, CAET 8.6, keep-light)
- History: the Dirty Dozen. FAA-H-8083-30B, page 14-13: after "a large number of maintenance-related aviation accidents
  and incidents that occurred in the late 1980s and early 1990s, Transport Canada identified twelve human factors" that
  the industry adopted as the "dirty dozen". Cite the handbook. The name Gordon Dupont and the year 1993 appear in
  secondary sources only: UNVERIFIED. No free image found (Transport Canada material is Crown copyright).
- Incidents (built): Aloha 243 (complacency), BA 5390 (pressure), Continental Express 2574 (communication), Boeing
  737-400 G-OBMM (AAIB 3/96, distraction; not re-checked in this pass), A320 sidestick wiring 2001 (awareness).
- New candidates: Air Midwest 5481 (norms: the mechanic and the inspector "discussed which steps to bypass", NTSB/AAR-04/01
  PDF p. 20); ValuJet 592 (pressure: mechanics "had been working 12-hour shifts 7 days per week", PDF p. 30).

**8. Shop Communication and Turnover** (`shop-communication`, CAET 8.6, rebuild)
- Incidents: Continental Express 2574 (A, built); Aeroperú 603 (A): the release chain from the work crew to the duty
  supervisor to the line chief to the pilot did not pass on the tape (report PDF p. 44); Air Midwest 5481 (A): the
  inspector who trained the mechanic also inspected the same work (batch A, finding 14).
- Technician lesson: a handover names every open item, including every cover, plug and piece of tape on the airplane.

### Room 3. Regulations and Records

**9. Maintenance Classification and Records** (`maintenance-records`, CAET 1.1 and 1.2, rebuild)
- History: the Air Commerce Act, signed 20 May 1926, and the first Air Commerce Regulations, effective 31 December 1926,
  which included licensing of mechanics (FAA, "Origins of the FAA"; open the PDF in a browser to quote it).
- Incidents: Alaska Airlines 261 (A): no requirement existed to record end play measurements (NTSB/AAR-02/01 footnote 49),
  and a card recording the 0.040 inch limit was crossed out and replaced by a recheck; ValuJet 592 (A): work card 0069
  was signed although the safety caps were never installed.
- Technician lesson: a record entry is a statement the next technician will act on; write the measured value, and sign
  only for what was done.

**10. Repair Stations, STCs, and the 8130-3** (`repair-stations`, CAET 1.4 and 1.5, rebuild)
- Incidents: Swissair 111 (B and C): the entertainment network was installed under STC ST00236LA-D, with Form 337 used
  to document the installation (TSB A98H0003, section 1.18.7); ValuJet 592 (A): the generators came out at SabreTech, a
  repair station; Partnair 394 (A): attachment parts of inferior quality and a support "of unknown origin" (AIBN 02/93);
  Air Transat 236 (A): an engine installed without the service bulletin that matched its configuration; BA 5390 (A):
  wrong bolts.
- Technician lesson: a part must be traceable and must match the airplane's approved data and configuration; an STC
  approves a design change, and the installation must follow it exactly.

**11. The Certification Checks** (`certification-checks`, CAET 1.3 and 1.2, rebuild)
- History: when the 14 CFR 91.411 and 91.413 tests were first required: UNVERIFIED, not found in this pass.
- Incidents: Birgenair 301 (A): the report lists "the failure to perform tests for the return to service of the
  pitot/static system after a lengthy time on the ground"; Aeroperú 603 (A): taped static ports. Neither was a 91.411
  event; say what the report said, not that a US rule applied.
- Milestone: Cerritos 1986 and Mode C (C), only after the rule history is confirmed (Part 2).

### Room 4. Tools and Test Equipment

**12. Meters** (`multimeter`, CAET 7.1 to 7.4, rebuild)
- History: Hans Christian Ørsted, 1820, a current moves a compass needle (published 21 July 1820, per the IEEE Milestone
  proposal on Ampère, batch C); Jacques-Arsène d'Arsonval and Marcel Deprez, the moving-coil galvanometer, early 1880s
  (Kenyon College). A then-and-now compare: the d'Arsonval meter movement beside a digital meter.
- Images: d'Arsonval meter movement diagram,
  https://commons.wikimedia.org/wiki/File:D'Arsonval_ammeter_movement.jpg (Flather, 1900, public domain in the US);
  Ørsted portrait (Part 3).
- Incidents: Hubble mirror (A, measurement): the test instrument was wrong by 1.3 mm, and two tests that disagreed were
  "discounted at the time as being themselves flawed"; Alaska 261 (A): the Board could not determine whether a shop-made
  fixture made the end play read low.
- Technician lesson: prove the meter on a known source before and after; when two instruments disagree, find out why.

**13. Oscilloscopes** (`oscilloscopes`, CAET 7.1 and 2.5, keep-light)
- History: Karl Ferdinand Braun and the cathode-ray tube, 1897. Filled example in `history-page-pattern.md`. The
  Tektronix 511, introduced in June 1947 (TekWiki), as a then-and-now image is not usable: the only Commons photo has an
  unreliable licence.
- Incidents: none verified.

**14. Hand Tools and Precision Measuring** (`hand-tools-measuring`, CAET 7.5 and 7.4, new)
- History: the American Wire Gauge, Brown and Sharpe, 1857: secondary sources only, UNVERIFIED (check NBS Handbook 100,
  Copper Wire Tables, https://archive.org/details/copperwiretables100unit).
- Incidents: BA 5390 (A): 84 bolts 0.026 inch undersize in diameter; Alaska 261 (A): the end play measurement and its
  fixture; Hubble (A): a precision measuring setup out by 1.3 mm.
- Technician lesson: identify a part by its number, then measure it with a tool that has been checked; a measurement
  near the limit is reported.

### Room 5. DC Electricity

**15. Principles of Electricity** (`principles-of-electricity`, CAET 8.4, rebuild)
- History: Coulomb (built); Benjamin Franklin and the kite (Founders Online; the Franklin Institute states "the kite was
  not struck by lightning", https://fi.edu/en/science-and-education/benjamin-franklin/kite-key-experiment); J. J.
  Thomson announced the electron (he called it a "corpuscle") in a 1897 Royal Institution lecture
  (https://www.rigb.org/explore-science/explore/blog/subatomic-science-jj-thomsons-discovery-electron).
- Images: Franklin (Duplessis, National Portrait Gallery, PD); Thomson,
  https://commons.wikimedia.org/wiki/File:J.J._Thomson_LCCN2014715407.jpg (Bain News Service, LOC, no known restrictions).
- Incident: the Hindenburg, 1937 (C): the Commerce Department found a brush discharge igniting leaking hydrogen the most
  probable cause. It explains the lesson's hook: why the fuel truck and the airplane are bonded.

**16. Voltage** (`voltage-lesson`, CAET 2.1, 2.2, 2.4, 7.2, rebuild)
- History: Volta and Kirchhoff (built).
- Image check for the built lesson: batch C found `File:Alessandro_Volta_01.jpg` has an unknown author and a private
  website source. A better-sourced choice: the Bettoni engraving at Smithsonian Libraries,
  https://library.si.edu/image-gallery/74048 ("No Copyright - United States"), on Commons as
  https://commons.wikimedia.org/wiki/File:Bettoni,_Nicol%C3%B2_(1770-1842)_-_Volta,_Alessandro_(1745-1827).jpg .
- Date wording: ETHW says Volta invented the pile in 1799; he announced it in a letter dated 20 March 1800. Say "announced
  in 1800".
- Incidents: none verified. (A general aviation charging-system failure case was sought and not verified.)

**17. Current** (`current-lesson`, CAET 2.1, 2.3, 2.4, 7.2, rebuild)
- History: Ampère (Blueprint): first presentation to the Académie on 18 September 1820, after Ørsted's July 1820 finding
  (IEEE Milestone proposal, batch C).
- Incidents: none needed.

**18. Resistance** (`resistance-lesson`, CAET 2.1, 6.1, 7.2, 7.3, rebuild)
- History: none (Ohm belongs to the next lesson).
- Incidents: none verified.

**19. Ohm's Law and Power** (`ohms-law-lesson`, CAET 2.1 to 2.3, rebuild)
- History: Georg Simon Ohm, 1789 to 1854, "Die galvanische Kette, mathematisch bearbeitet", 1827 (built; ETHW agrees).
- Incidents: none needed.

**20. Series Circuits** (`series-circuits`, keep-light) - History: none. Incidents: none.

**21. Parallel Circuits** (`parallel-circuits`, split) - History: Kirchhoff callback (Blueprint). Incidents: none.

**22. Series-Parallel Circuits** (`series-parallel-circuits`, new) - History: none. Incidents: none.

### Room 6. AC Electricity

**23. AC Principles** (`ac-principles`, CAET 2.5, rebuild)
- History: Faraday; Edison, Tesla and Westinghouse (built). Add to the timeline: 20 March 1886, William Stanley's AC
  system with transformers in Great Barrington (IEEE Milestone).
- Check the built lesson: its timeline says Westinghouse "buys the rights to Tesla's patents" in 1888. The U.S.
  Department of Energy and ETHW say Westinghouse licensed Tesla's polyphase induction motor patents (ETHW: July 1888).
  Use "licensed" unless Britannica's wording is confirmed.
- Incidents: none needed.

**24. Capacitors and Inductors** (`capacitors-inductors`, CAET 2.6, keep-light)
- History: Joseph Henry (built). The Leyden jar, the first capacitor: Ewald von Kleist on 4 November 1745 and Pieter van
  Musschenbroek in 1746 (ETHW, https://ethw.org/Leyden_jar).
- Images: Leyden jar drawing, https://commons.wikimedia.org/wiki/File:Leydenjar.png (Black, 1913, public domain in the
  US); Musschenbroek engraving, Wellcome Collection, CC BY 4.0.
- Incidents: none needed.

**25. Transformers** (`transformers-aircraft-ac`, CAET 2.5, split)
- History: Faraday's ring, 29 August 1831 (built; Royal Institution). Stanley's 1886 transformer patent drawing.
- Images: ring, https://commons.wikimedia.org/wiki/File:Faraday_ring_transformer.jpg (Proceedings of the IEE, 1922,
  public domain in the US only; the Royal Institution's own photo is not free); patent drawing,
  https://commons.wikimedia.org/wiki/File:StanleyTransformer.png (US Patent 349,611, PD).
- Incidents: none needed.

### Room 7. Aircraft Electrical Systems

**26. AC in the Aircraft** (`ac-in-the-aircraft`, CAET 2.5 and 2.6, rebuild)
- History: MIL-STD-704, 6 October 1959, 28 V DC and 115/200 V, 400 Hz AC (Blueprint).
- Incident: Boeing 787 generator control units, AD 2015-09-07 (B): a counter overflow after 248 days of continuous power
  would put all four main generator control units into failsafe; the AD requires a power-down at least every 120 days.
- Technician lesson: the generator control unit decides whether the generator's AC reaches the bus; an AD can require a
  repeated action that is tracked like an inspection.

**27. The Aircraft DC Power System** (`power-distribution`, CAET 2.6 and 2.7, new)
- Incident: Swissair 111 (B): the entertainment network was powered from a bus that the CABIN BUS switch did not shed
  (TSB section 4.1.7.1); the circuit breakers "were not capable of protecting against all types of wire arcing events"
  (section 3.1).
- Technician lesson: which bus a load is wired to decides what a load-shed switch removes; a breaker protects the wire
  from overload, not from every arc.
- Note: this is a transport category AC bus; say so on the page, then make the same point about a light aircraft's
  avionics master and buses.

**28. Lighting Systems** (`lighting-systems`, CAET 2.6 and 2.7, keep-light)
- Incident: Eastern Air Lines 401 (B): "both bulbs in the nose landing gear position indicating system were burned out".
- Technician lesson: an indicator lamp is part of a system the crew trusts; replace with the right lamp and check the
  press-to-test.
- History: none verified.

**29. Electrical Troubleshooting** (`electrical-troubleshooting`, CAET 2.7 and 2.6, new)
- Incidents: none verified in this pass. Candidates to read first: Adam Air 574 (recurring defects in the inertial
  reference system; the count is UNVERIFIED); Turkish Airlines 1951 (earlier radio altimeter faults: UNVERIFIED in the
  report).
- Technician lesson the candidates would teach: a recurring write-up is one fault that has not been found yet.

### Room 8. Solid-State and Digital Electronics

**30. Diodes and Rectification** (`semiconductors`, CAET 2.6 and 2.7, rebuild)
- History: Karl Ferdinand Braun, 1874: certain metal sulfide crystals conduct in one direction only (Encyclopedia.com;
  ETHW does not mention it: one source, confirm in a second before use). Reuse the Braun portrait from Oscilloscopes.
- Incidents: none needed.

**31. Transistors and Inverters** (`transistors-inverters`, CAET 2.5 to 2.7, rebuild)
- History: John Bardeen, Walter Brattain and William Shockley at Bell Labs: first successful point-contact transistor
  amplifier on 16 December 1947, shown to laboratory officials on 23 December; shared the 1956 Nobel Prize (Computer
  History Museum, https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/).
- Images: replica of the first transistor, https://commons.wikimedia.org/wiki/File:Replica-of-first-transistor.jpg
  (White House photo, 1997, public domain); the 1948 group photo is public domain only on a "no notice" argument
  (medium risk; batch C).
- Incidents: none needed.

**32. Basic Logic Gates** (`digital-logic`, CAET 5.1, rebuild)
- History: George Boole, 1815 to 1864, "The Laws of Thought", 1854 (University College Cork,
  https://www.ucc.ie/en/heritage/history/people/ucc-staff/professor-george-boole/); Claude Shannon's master's thesis,
  written 1937, applied Boole's algebra to relay circuits (Computer History Museum; MIT dates the degree 1940).
- Images: Boole, https://commons.wikimedia.org/wiki/File:PSM_V17_D740_George_Boole.jpg (Popular Science Monthly, 1880,
  PD in the US); Shannon, https://commons.wikimedia.org/wiki/File:C.E._Shannon._Tekniska_museet_43069.jpg (CC BY 2.0)
  or ClaudeShannon_MFO3807.jpg (CC BY-SA 2.0 DE). No public-domain Shannon photo found.
- Incidents: none verified.

**33. Digital Signals in Avionics** (`digital-signals`, CAET 5.1, rebuild)
- History: Harry Nyquist (Bell System 1917 to 1954, ETHW); what to say about his sampling work: UNVERIFIED in this pass.
  No free photo found.
- Incidents: none verified.

### Room 9. Databuses

**34. ARINC 429** (`databus-types`, CAET 5.2, split)
- History: ARINC 429 first published July 1977, in service on the A310, 757 and 767 (Blueprint, Digital Avionics
  Handbook). ARINC founded 1929: UNVERIFIED in a reliable source. Do not use the ARINC logo.
- Incident: Qantas 72 (B): one air data inertial reference unit sent intermittent spikes, and every computer listening to
  it received them. That the spikes traveled on ARINC 429 buses is UNVERIFIED in the report; read the ATSB report before
  saying so.
- Image: Boeing 757 flight deck, https://commons.wikimedia.org/wiki/File:Boeing_757-200_flight_deck.jpg (CC BY-SA 2.0).

**35. MIL-STD-1553** (`mil-std-1553`, CAET 5.3, rebuild)
- History: August 1973, first used on the F-16; 1553B in 1978 (Blueprint, Digital Avionics Handbook).
- Image: https://commons.wikimedia.org/wiki/File:F-16_June_2008.jpg (US Air Force, public domain).
- Incidents: none verified.

**36. RS-232, RS-422, and RS-485** (`rs-serial-interfaces`, CAET 5.4, keep-light)
- History: RS-232 first issued by the Electronic Industries Association in 1960, revision C in 1969: secondary sources
  only, UNVERIFIED.
- Incidents: none.

### Room 10. Aircraft Wiring

**37. Wire, Tools, and Hardware Selection** (`wire-selection`, CAET 6.1, rebuild)
- History: American Wire Gauge, 1857 (UNVERIFIED, see lesson 14). Polyimide wire arc tracking research: NASA report NTRS
  20050169932 ("Work of the US Government. Public Use Permitted."); content not read in this pass.
- Incidents: TWA 800 (B): wiring in shared bundles, and the finding that "insufficient attention" had been paid to
  aircraft wiring; Swissair 111 (B): a wire arcing event in a space full of flammable material.
- Technician lesson: the wire type, insulation and rating come from the approved data, because the wire's job includes
  not starting a fire.

**38. Routing, Coax, and Databus Wiring** (`routing-coax-databus`, CAET 6.2 and 6.3, split)
- Incidents: TWA 800 (B): energy from a short outside the tank on wiring that ran into it; Swissair 111 (B); Air Transat
  236 (A): two lines installed in contact wore through.
- Technician lesson: separation, clamping and chafe protection are what keep one wire's fault from becoming another
  system's fault.
- Images: NTSB TWA 800 reconstruction photos (public domain).

**39. Terminations, Bonding, and Grounding** (`terminations-bonding`, CAET 6.4, split)
- Incidents: A320 sidestick wiring (A): pins in the wrong cavities; Swissair 111 (B): what an arc leaves on a wire (a
  resolidified copper bead, TSB section on arcing); Pan Am 214 (C): lightning, bonding and fuel tank access panels.
- Technician lesson: every contact goes in the cavity the wiring diagram names, and every bond is measured.

**40. Harness Fabrication** (`harness-fabrication`, CAET 6.6, rebuild)
- Incident: A320 sidestick wiring (A): about 420 pins rewired, and the continuity check required by AMM 20-52-10 was
  cancelled orally (BFU 5X004-0/01, batch A reading).
- Technician lesson: a rebuilt connector is rung out wire by wire against the diagram before the system test.

**41. Ring-out and Wiring Troubleshooting** (`wiring-troubleshooting`, CAET 6.7, keep-light)
- Incidents: A320 sidestick wiring (A): the functional check was made from the side that was not worked on; TWA 800 (B):
  silver-sulfide deposits found on fuel quantity parts; Swissair 111 (B): arc beads as evidence.
- Technician lesson: a ring-out proves continuity; only a check of direction from the side you worked on proves the
  system works the right way.

### Room 11. Flight Instruments

**42. Pitot-Static Systems** (`pitot-static`, CAET 4.1, split)
- History: Henri Pitot (built).
- Incidents: Birgenair 301 (A): covers not installed while parked; the cause of the obstruction was never determined; AF447
  (B): "icing of Pitot probes in cruise, erroneous speed indications" (BEA, final report July 2012, FAA-hosted copy
  https://www.faa.gov/sites/faa.gov/files/AirFrance447_BEA.pdf ; BEA page
  https://bea.aero/en/investigation-reports/notified-events/detail/accident-to-the-airbus-a330-203-registered-f-gzcp-and-operated-by-air-france-occured-on-06-01-2009-in-the-atlantic-ocean).
- Technician lesson: the pitot tube is open to anything that gets in; covers and inspection are part of the system.
- Image: AF447 aircraft, https://commons.wikimedia.org/wiki/File:F-GZCP_Aircraft.jpg (CC0).
- Note: the AF447 probe part numbers (Thales C16195AA and BA) are from secondary sources; confirm in the BEA report
  before use.

**43. Blocked Ports and Altimeter Setting** (`blocked-ports`, CAET 4.2 and 4.3, rebuild)
- History: Kollsman and Doolittle (built). Image for Kollsman: no free portrait; use
  https://commons.wikimedia.org/wiki/File:Kollsman_Drum_Altimeter.jpg (FAA, 1972, public domain).
- Incidents: Aeroperú 603 (A, the filled example in `incident-page-pattern.md`); Northwest 6231 (B): "erroneous airspeed
  and Mach indications which had resulted from a blockage of the pitot heads by atmospheric icing. Contrary to standard
  operational procedures, the flightcrew had not activated the pitot head heaters" (NTSB-AAR-75-13, probable cause;
  FAA-hosted copy https://www.faa.gov/sites/faa.gov/files/2022-11/NWA6231_Accident_Report.pdf ; registration N274US);
  XL Airways 888T (A): sensors rinsed without protection.
- Technician lesson: a blocked pitot makes the airspeed indicator act like an altimeter; a blocked static port freezes
  the altimeter; tape and covers come off before release.
- Image for NW 6231: https://commons.wikimedia.org/wiki/File:Northwest_Orient_Airlines_Boeing_727-251_N274US_at_Fort_Lauderdale_Int%27l_Airport,_31_January_1970.jpg
  (public domain per the file page; author unknown).

**44. Gyro Instruments** (`gyroscopic-instruments`, CAET 4.4, rebuild)
- History: Foucault, Sperry and Doolittle (built). Images: instrument panel of the 1929 flight,
  https://commons.wikimedia.org/wiki/File:Doolittle-inst-panel.jpg (US Air Force, public domain); Lawrence Sperry,
  https://commons.wikimedia.org/wiki/File:Lawrence_Sperry_LCCN2002697155.jpg (LOC, no known restrictions). The Blueprint
  credits Elmer Sperry Jr. with the 1929 gyros: UNVERIFIED; the IEEE Milestone says Sperry Gyroscope Company.
- Incidents: Adam Air 574 (B): attitude source troubleshooting in flight; read the report first. A general aviation
  vacuum pump failure case: sought, not verified.

**45. EFIS and the Glass Cockpit** (`efis-glass`, CAET 4.5, rebuild)
- History: NASA Langley's Boeing 737 research airplane (NASA 515), acquired in 1974, flew more than 20 research projects
  including glass cockpits (NASA SP-4216, "Airborne Trailblazer", https://ntrs.nasa.gov/citations/19940028287).
- Image: https://commons.wikimedia.org/wiki/File:NASA_515_Boeing_B-737-130.jpg (NASA, public domain). A 1973 NASA photo of
  the same airplane credits Boeing as photographer: avoid it.
- Incidents: Qantas 72 (B): a bad source drives every display and computer that listens; AF447 (B): unreliable airspeed;
  Turkish Airlines 1951 (B): one radio altimeter fed the autothrottle (read the report first).
- Technician lesson: a red X or a wrong value is a report about the source; trace it to the sensor and the bus.

### Room 12. Communication

**46. Comm Radios and Audio** (`comm-radios`, CAET 3.1 and 3.2, rebuild; follow the approved v3 storyboard)
- History: Reginald Fessenden's broadcasts from Brant Rock, December 1906 (ETHW,
  https://ethw.org/Reginald_A._Fessenden); Marconi's transatlantic reception, 12 December 1901 (IEEE Milestone).
- Images: Fessenden, https://commons.wikimedia.org/wiki/File:Fessenden.JPG (Harper's Weekly, 1903, PD); Marconi (Part 3).
- Incidents: none verified. Tenerife 1977 (two transmissions at once blocked a message) is told from secondary sources
  only; the Spanish report was not read. Do not use it until it is.

### Room 13. Navigation

**47. VOR** (`radio-navigation`, CAET 3.3, split)
- History: the four-course radio range, introduced 1928 to 1929 (Centennial of Flight Commission,
  https://www.centennialofflight.net/essay/Government_Role/navigation/POL13.htm); VOR testing from 1944; eight New York
  to Chicago stations converted in 1946 and general installation from 1947 (FAA history).
- Images: range station, https://commons.wikimedia.org/wiki/File:LFR-photo.jpg (PD-USGov-FAA, station not identified);
  range approach chart, https://commons.wikimedia.org/wiki/File:Stockholm_Bromma_Range_Approach_Chart_1946.jpg (US DoD,
  PD); radio range receiver, 1929,
  https://commons.wikimedia.org/wiki/File:Receiver,_Radio_Range,_ARC,_Lab_Prototype,_Model_B_-_DPLA_-_f0f68ca8a23dfb7213fd6aa014f61843_(page_1).jpg
  (CC0 via DPLA). A then-and-now compare: listen for A and N, then read the needle.
- Incidents: none verified.

**48. ILS and DME, with ADF** (`ils-dme`, CAET 3.4, rebuild)
- History: Doolittle's marker beacons, 1929 (built); the first landing of a scheduled US airliner using ILS, 26 January
  1938, a Pennsylvania-Central Airlines Boeing 247-D at Pittsburgh (Centennial of Flight Commission,
  https://www.centennialofflight.net/essay/Government_Role/landing_nav/POL14.htm). No public-domain photo found.
- Incident: Korean Air 801 (B): cleared for the ILS "glideslope unusable"; the report records an earlier glideslope
  indication with no warning flag while it was out of service.
- Technician lesson: know how the receiver flags a missing glideslope, and never treat a centered needle as proof of a
  signal.

**49. GPS and WAAS** (`gps-waas`, CAET 3.5, keep-light)
- History: first GPS satellite 1978 (Blueprint); the 16 September 1983 statement opening GPS to civil aircraft after
  Korean Air Lines 007 (Part 2).
- Image: https://commons.wikimedia.org/wiki/File:GPS-IIR.jpg (US Government, PD).
- Incidents: none verified for receivers or antennas.

### Room 14. Surveillance

**50. Transponders, ADS-B, and Antennas** (`transponders-adsb`, CAET 3.6 and 3.7, split)
- History: IFF in World War II (Blueprint); image, https://commons.wikimedia.org/wiki/File:IFF_display_on_A-scope.jpg (US
  Army TM 11-1133, 1943, PD). The 1956 Grand Canyon collision and the 1958 Federal Aviation Agency (FAA Lessons Learned
  N6902C).
- Incidents: Überlingen 2002 (B): one crew followed TCAS and one followed ATC; Gol 1907 (B): the business jet's
  transponder was not transmitting and its collision avoidance system was not working (report section UNVERIFIED);
  Cerritos 1986 (C): no Mode C on the light airplane (rule history UNVERIFIED).
- Technician lesson: TCAS can only see an airplane whose transponder answers; a transponder that is on but not replying is
  invisible to it.

**51. Antennas and Coax** (`antennas-coax`, CAET 3.8, new)
- History: Marconi, transatlantic reception 1901; Hertz, experiments from 1886, published 1888 (ETHW,
  https://ethw.org/Heinrich_Hertz). Images: Part 3.
- Incidents: none verified.

### Blueprint lessons not in the rooms on 2026-10-01

- `bonding-grounding-shielding` (new, CAET 6.5): Pan Am 214 (C); Swissair 111 arc evidence.
- `coax-databus-cable` (new, CAET 6.3 and 5.5): none verified.
- `databus-troubleshooting` (new, CAET 5.6): Qantas 72 (B), after the ATSB report is read.
- `cockpit-instruments` (merge): none.

---

## Sources

Report and image URLs are given in each entry above. Other sources used:
- Lesson list: `frontend/public/aero/hangar/classrooms.json`; Blueprint plans `curriculum/blueprint/plans/*.json`; built
  pages in `tools/curriculum/revamp/examples/`.
- FAA Lessons Learned library, https://www.faa.gov/lessons_learned (pages checked by registration, 2026-10-01).
- IEEE ETHW: https://ethw.org/Milestones:First_Blind_Takeoff,_Flight_and_Landing,_1929 ;
  https://ethw.org/Milestones:Alternating_Current_Electrification,_1886 ; https://ethw.org/Leyden_jar
- U.S. Department of Energy, "The War of the Currents: AC vs. DC Power",
  https://www.energy.gov/articles/war-currents-ac-vs-dc-power
- Kenyon College, Early Apparatus, d'Arsonval galvanometer (URL in lesson 12).
- Linda Hall Library and Encyclopedia.com on Braun (URLs in `history-page-pattern.md`).
- Computer History Museum, University College Cork, Royal Institution, Franklin Institute, Centennial of Flight Commission
  (URLs in the entries).
- Research agents' reading notes of 2026-10-01 ("batch A", "batch B", "batch C" above) for facts read from scanned
  reports and file pages; those facts carry the same check-before-use rule.
