import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, Typography, useTheme } from "@mui/material";
// import { useGetSalesQuery } from "state/api";
import { ResponsiveSunburst } from '@nivo/sunburst'

const BreakdownChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  // const { data, isLoading } = useGetSalesQuery();

  // if(!data || isLoading) return "Loading...";

  const data1 = {
    "name": "nivo",
    "color": "hsl(359, 70%, 50%)",
    "children": [
      {
        "name": "viz",
        "color": "hsl(160, 70%, 50%)",
        "children": [
          {
            "name": "stack",
            "color": "hsl(174, 70%, 50%)",
            "children": [
              {
                "name": "cchart",
                "color": "hsl(216, 70%, 50%)",
                "loc": 61308
              },
              {
                "name": "xAxis",
                "color": "hsl(339, 70%, 50%)",
                "loc": 97075
              },
              {
                "name": "yAxis",
                "color": "hsl(58, 70%, 50%)",
                "loc": 144606
              },
              {
                "name": "layers",
                "color": "hsl(110, 70%, 50%)",
                "loc": 116867
              }
            ]
          },
          {
            "name": "ppie",
            "color": "hsl(214, 70%, 50%)",
            "children": [
              {
                "name": "chart",
                "color": "hsl(284, 70%, 50%)",
                "children": [
                  {
                    "name": "pie",
                    "color": "hsl(120, 70%, 50%)",
                    "children": [
                      {
                        "name": "outline",
                        "color": "hsl(271, 70%, 50%)",
                        "loc": 176090
                      },
                      {
                        "name": "slices",
                        "color": "hsl(125, 70%, 50%)",
                        "loc": 82345
                      },
                      {
                        "name": "bbox",
                        "color": "hsl(285, 70%, 50%)",
                        "loc": 99532
                      }
                    ]
                  },
                  {
                    "name": "donut",
                    "color": "hsl(315, 70%, 50%)",
                    "loc": 186732
                  },
                  {
                    "name": "gauge",
                    "color": "hsl(110, 70%, 50%)",
                    "loc": 132217
                  }
                ]
              },
              {
                "name": "legends",
                "color": "hsl(278, 70%, 50%)",
                "loc": 136564
              }
            ]
          }
        ]
      },
      {
        "name": "colors",
        "color": "hsl(251, 70%, 50%)",
        "children": [
          {
            "name": "rgb",
            "color": "hsl(180, 70%, 50%)",
            "loc": 180285
          },
          {
            "name": "hsl",
            "color": "hsl(341, 70%, 50%)",
            "loc": 25468
          }
        ]
      },
      {
        "name": "utils",
        "color": "hsl(228, 70%, 50%)",
        "children": [
          {
            "name": "randomize",
            "color": "hsl(144, 70%, 50%)",
            "loc": 146661
          },
          {
            "name": "resetClock",
            "color": "hsl(223, 70%, 50%)",
            "loc": 183247
          },
          {
            "name": "noop",
            "color": "hsl(288, 70%, 50%)",
            "loc": 27870
          },
          {
            "name": "tick",
            "color": "hsl(339, 70%, 50%)",
            "loc": 37157
          },
          {
            "name": "forceGC",
            "color": "hsl(52, 70%, 50%)",
            "loc": 108773
          },
          {
            "name": "stackTrace",
            "color": "hsl(123, 70%, 50%)",
            "loc": 192468
          },
          {
            "name": "dbg",
            "color": "hsl(61, 70%, 50%)",
            "loc": 27752
          }
        ]
      },
      {
        "name": "generators",
        "color": "hsl(17, 70%, 50%)",
        "children": [
          {
            "name": "address",
            "color": "hsl(244, 70%, 50%)",
            "loc": 139115
          },
          {
            "name": "city",
            "color": "hsl(74, 70%, 50%)",
            "loc": 34713
          },
          {
            "name": "animal",
            "color": "hsl(355, 70%, 50%)",
            "loc": 193650
          },
          {
            "name": "movie",
            "color": "hsl(270, 70%, 50%)",
            "loc": 194639
          },
          {
            "name": "user",
            "color": "hsl(264, 70%, 50%)",
            "loc": 89187
          }
        ]
      },
      {
        "name": "set",
        "color": "hsl(245, 70%, 50%)",
        "children": [
          {
            "name": "clone",
            "color": "hsl(318, 70%, 50%)",
            "loc": 6746
          },
          {
            "name": "intersect",
            "color": "hsl(34, 70%, 50%)",
            "loc": 168238
          },
          {
            "name": "merge",
            "color": "hsl(207, 70%, 50%)",
            "loc": 14539
          },
          {
            "name": "reverse",
            "color": "hsl(25, 70%, 50%)",
            "loc": 62440
          },
          {
            "name": "toArray",
            "color": "hsl(59, 70%, 50%)",
            "loc": 54964
          },
          {
            "name": "toObject",
            "color": "hsl(294, 70%, 50%)",
            "loc": 163642
          },
          {
            "name": "fromCSV",
            "color": "hsl(272, 70%, 50%)",
            "loc": 157857
          },
          {
            "name": "slice",
            "color": "hsl(161, 70%, 50%)",
            "loc": 119374
          },
          {
            "name": "append",
            "color": "hsl(36, 70%, 50%)",
            "loc": 15729
          },
          {
            "name": "prepend",
            "color": "hsl(326, 70%, 50%)",
            "loc": 49139
          },
          {
            "name": "shuffle",
            "color": "hsl(67, 70%, 50%)",
            "loc": 9488
          },
          {
            "name": "pick",
            "color": "hsl(214, 70%, 50%)",
            "loc": 37027
          },
          {
            "name": "plouc",
            "color": "hsl(98, 70%, 50%)",
            "loc": 183709
          }
        ]
      },
      {
        "name": "text",
        "color": "hsl(297, 70%, 50%)",
        "children": [
          {
            "name": "trim",
            "color": "hsl(143, 70%, 50%)",
            "loc": 114228
          },
          {
            "name": "slugify",
            "color": "hsl(76, 70%, 50%)",
            "loc": 154833
          },
          {
            "name": "snakeCase",
            "color": "hsl(327, 70%, 50%)",
            "loc": 187365
          },
          {
            "name": "camelCase",
            "color": "hsl(316, 70%, 50%)",
            "loc": 41730
          },
          {
            "name": "repeat",
            "color": "hsl(229, 70%, 50%)",
            "loc": 55483
          },
          {
            "name": "padLeft",
            "color": "hsl(348, 70%, 50%)",
            "loc": 10568
          },
          {
            "name": "padRight",
            "color": "hsl(125, 70%, 50%)",
            "loc": 52272
          },
          {
            "name": "sanitize",
            "color": "hsl(143, 70%, 50%)",
            "loc": 84919
          },
          {
            "name": "ploucify",
            "color": "hsl(77, 70%, 50%)",
            "loc": 23395
          }
        ]
      },
      {
        "name": "misc",
        "color": "hsl(64, 70%, 50%)",
        "children": [
          {
            "name": "greetings",
            "color": "hsl(326, 70%, 50%)",
            "children": [
              {
                "name": "hey",
                "color": "hsl(221, 70%, 50%)",
                "loc": 101448
              },
              {
                "name": "HOWDY",
                "color": "hsl(215, 70%, 50%)",
                "loc": 127390
              },
              {
                "name": "aloha",
                "color": "hsl(295, 70%, 50%)",
                "loc": 66445
              },
              {
                "name": "AHOY",
                "color": "hsl(40, 70%, 50%)",
                "loc": 197130
              }
            ]
          },
          {
            "name": "other",
            "color": "hsl(272, 70%, 50%)",
            "loc": 139649
          },
          {
            "name": "path",
            "color": "hsl(292, 70%, 50%)",
            "children": [
              {
                "name": "pathA",
                "color": "hsl(194, 70%, 50%)",
                "loc": 9319
              },
              {
                "name": "pathB",
                "color": "hsl(354, 70%, 50%)",
                "children": [
                  {
                    "name": "pathB1",
                    "color": "hsl(252, 70%, 50%)",
                    "loc": 84280
                  },
                  {
                    "name": "pathB2",
                    "color": "hsl(279, 70%, 50%)",
                    "loc": 105602
                  },
                  {
                    "name": "pathB3",
                    "color": "hsl(26, 70%, 50%)",
                    "loc": 191145
                  },
                  {
                    "name": "pathB4",
                    "color": "hsl(12, 70%, 50%)",
                    "loc": 46436
                  }
                ]
              },
              {
                "name": "pathC",
                "color": "hsl(355, 70%, 50%)",
                "children": [
                  {
                    "name": "pathC1",
                    "color": "hsl(148, 70%, 50%)",
                    "loc": 97075
                  },
                  {
                    "name": "pathC2",
                    "color": "hsl(152, 70%, 50%)",
                    "loc": 48437
                  },
                  {
                    "name": "pathC3",
                    "color": "hsl(353, 70%, 50%)",
                    "loc": 63160
                  },
                  {
                    "name": "pathC4",
                    "color": "hsl(200, 70%, 50%)",
                    "loc": 14362
                  },
                  {
                    "name": "pathC5",
                    "color": "hsl(90, 70%, 50%)",
                    "loc": 110368
                  },
                  {
                    "name": "pathC6",
                    "color": "hsl(105, 70%, 50%)",
                    "loc": 29724
                  },
                  {
                    "name": "pathC7",
                    "color": "hsl(75, 70%, 50%)",
                    "loc": 24071
                  },
                  {
                    "name": "pathC8",
                    "color": "hsl(17, 70%, 50%)",
                    "loc": 981
                  },
                  {
                    "name": "pathC9",
                    "color": "hsl(235, 70%, 50%)",
                    "loc": 193095
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
  const colors = [
    theme.palette.secondary[500],
    theme.palette.secondary[300],
    theme.palette.secondary[300],
    theme.palette.secondary[500],
  ];

  // const formattedData = Object.entries(data[0].salesByCategory).map(
  //   ([category, sales], index) => ({
  //       id: category,
  //       label: category,
  //       value: sales,
  //       color: colors[index],
  //   })
  // )

  return <Box
    height={isDashboard ? "400px" : "100%"}
    width={undefined}
    minHeight={isDashboard ? "325px" : undefined}
    minWidth={isDashboard ? "325px" : undefined}
    position="relative"

  >
    {/* <ResponsivePie
        data={formattedData}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: theme.palette.secondary[200],
              },
            },
            legend: {
              text: {
                fill: theme.palette.secondary[200],
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.secondary[200],
                strokeWidth: 1,
              },
              text: {
                fill: theme.palette.secondary[200],
              },
            },
          },
          legends: {
            text: {
              fill: theme.palette.secondary[200],
            },
          },
          tooltip: {
            container: {
              color: theme.palette.primary.main,
            },
          },
        }}
        colors={{ datum: "data.color" }}
        margin={
          isDashboard
            ? { top: 40, right: 80, bottom: 100, left: 50 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        sortByValue={true}
        innerRadius={0.45}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLinkLabels={!isDashboard}
        arcLinkLabelsTextColor={theme.palette.secondary[200]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: isDashboard ? 20 : 0,
            translateY: isDashboard ? 50 : 56,
            itemsSpacing: 0,
            itemWidth: 85,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: theme.palette.primary[500],
                },
              },
            ],
          },
        ]}
      /> */}

       <ResponsiveSunburst
        data={data1}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        id="name"
        value="loc"
        cornerRadius={2}
        borderColor={{ theme: 'background' }}
        colors={{ scheme: 'nivo' }}
        childColor={{
            from: 'color',
            modifiers: [
                [
                    'brighter',
                    0.1
                ]
            ]
        }}
        enableArcLabels={true}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.4
                ]
            ]
        }}
    />

      <Box
        position="absolute"
        top="50%"
        left="50%"
        color={theme.palette.secondary[400]}
        textAlign="center"
        pointerEvents="none"
        sx={{
            transform: isDashboard ? "translate(-75%, -170%)" : "translate(-50%, -100%) scale(0.8)",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
            {/* {!isDashboard && "Total:"} ${data[0].yearlySalesTotal} */}
        </Typography>

      </Box>

  </Box>;
};

export default BreakdownChart;
